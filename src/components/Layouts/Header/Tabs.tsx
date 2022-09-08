import SignInForm from '@/components/signin_form/SignInForm';
import LoginForm from '@/components/signup_form/SignUpForm';
import { FORM_LOGIN } from '@/util/constant';
import React, { useState } from 'react';

export interface ITabsProps {}

export default function Tabs(props: ITabsProps) {
  const [currentTab, setCurrentTab] = useState('1');

  const handleTabClick = (e: any) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="container">
      <div className="tabs flex justify-center text-xl pb-4">
        {FORM_LOGIN.map((tab, i) => (
          <button
            className={`w-1/2 ${currentTab === `${tab.id}` ? 'bg-red-300' : ''}`}
            key={i}
            id={`${tab.id}`}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">{currentTab === '2' ? <LoginForm /> : <SignInForm />}</div>
    </div>
  );
}
