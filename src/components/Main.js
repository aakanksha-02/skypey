import React from 'react'
import './styles/Main.css'
import Empty from './Empty';
import ChatWindow from '../containers/ChatWindow';

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if(!activeUserId){
      return <Empty 
        user={user}
        activeUserId={renderMainContent}
      />
    }
    else{
      return <ChatWindow 
        activeUserId={renderMainContent}
      />
    }
  };
  return <main className="Main">{renderMainContent()}</main>
}

export default Main;
