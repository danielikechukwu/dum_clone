import React from "react";
import ContactList from "./ContactList";
import image1 from "../../assests/dav.jpg";
import image2 from "../../assests/vic.jpg";
import image3 from "../../assests/cam.jpg";
import image4 from "../../assests/isa.jpg";
import image5 from "../../assests/gift.jpg";
import image6 from "../../assests/iet (2).jpg";
import image7 from "../../assests/iet.jpg";
import image9 from "../../assests/jim.jpg";
import image10 from "../../assests/fafi.jpg";
import image11 from "../../assests/ag.jpg";
import image12 from "../../assests/ema.jpg";
import image13 from "../../assests/rt.jpg";
import image14 from "../../assests/er.jpg";
import image15 from "../../assests/pot.jpg";
import image16 from "../../assests/mar.jpg";
import image17 from "../../assests/je.jpg";
import image18 from "../../assests/the.jpg";

const CONSTACTS = [
  {
    image: image1,
    name: "David Echefulem",
    chat: "how far Daniel",
    time: "12:03",
  },

  {
    image: image2,
    name: "Miene Victor",
    chat: "Happy birthday",
    time: "11:02",
  },

  {
    image: image3,
    name: "Cameroon Daniel",
    chat: "WORD OF THE DAY",
    time: "09:03",
  },

  {
    image: image4,
    name: "Isaac",
    chat: "How that side",
    time: "1/6/22",
  },

  {
    image: image5,
    name: "Gift",
    chat: "Who told you",
    time: "1/8/22",
  },

  {
    image: image6,
    name: "IET On-Campus",
    chat: "David: Many thanks",
    time: "Yesterday",
  },

  {
    image: image7,
    name: "IET On Campus NDU",
    chat: "David: Microsoft Launches Initiative...",
    time: "Yesterday",
  },

  {
    image: image9,
    name: "Jim Phillip",
    chat: "Nope",
    time: "Yesterday",
  },

  {
    image: image10,
    name: "Elvis Fafi",
    chat: "Hello",
    time: "Yesterday",
  },

  {
    image: image11,
    name: "Agent Eli",
    chat: "did it work?",
    time: "Yesterday",
  },

  {
    image: image12,
    name: "Emmanuella",
    chat: "Smiles ok",
    time: "Yesterday",
  },

  {
    image: image13,
    name: "Nwanjei Peter",
    chat: "Ok",
    time: "1/10/22",
  },

  {
    image: image14,
    name: "Ogolo Favour",
    chat: "How are you",
    time: "1/10/22",
  },

  {
    image: image15,
    name: "Harry Porter",
    chat: "You ehhh",
    time: "1/10/22",
  },

  {
    image: image16,
    name: "TCN Marvellous",
    chat: "Yeap",
    time: "1/10/22",
  },

  {
    image: image17,
    name: "Jerry",
    chat: "Hmmm go where???",
    time: "1/9/22",
  },

  {
    image: image18,
    name: "Theophilus",
    chat: "You`re welcome",
    time: "1/9/22",
  },
];

function ContactArray(props) {
  const constactLlist = CONSTACTS.map((contact) => (
    <ContactList
      image={contact.image}
      name={contact.name}
      chat={contact.chat}
      time={contact.time}
      badge={contact.badge}
    />
  ));

  return <div>{constactLlist}</div>;
}

export default ContactArray;
