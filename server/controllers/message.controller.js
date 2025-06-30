import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js';

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.user._id;
    const receiverId = req.params.receiverId;
    const message = req.body.message;
    
    if (!message || !senderId || !receiverId) {
      return res.status(400).json({ message: 'All fields are required', success: false });
    }
  

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    })

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await conversation.save();
    }


    // socket io


    return res.status(200).json({
      message: 'Message sent successfully',
      success: true,
      responseData: newMessage

    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


// Get Messages Controller
export const getMessages = async (req, res) => {
  try {
    const myId = req.user._id; // Assuming user ID is stored in req.user by auth middleware
    const otherParticipantId = req.params.otherParticipantId;

    // console.log("myId", myId, "otherParticipantId", otherParticipantId)

    if(!myId || !otherParticipantId) {
      return res.status(400).json({ message: 'All fields are required', success: false });
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [myId, otherParticipantId] }
    }).populate("messages");

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found', success: false });
    }

    return res.status(200).json({
      // message: 'Messages retrieved successfully',
      success: true,
      responseData: conversation,
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
}


