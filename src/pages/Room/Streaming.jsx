// Streaming.jsx
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Streaming = () => {
  const { userName } = useParams();
  const meetingRef = useRef(null); // Correct way to use ref

  const appID = 1768990721;
  const serverSecret = "e1b2563fdecf17651622ca7816c8d160";
  const roomID = userName;
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    Date.now().toString(),
    userName
  );

  useEffect(() => {
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: meetingRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
      sharedLinks: [{
        name: 'share this link',
        url: `http://localhost:5173/stream/${roomID}`
      }]
    });
  }, []);

  return (
    <div
      className="myCallContainer"
      ref={meetingRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
};

export default Streaming;
