import ContactUs from '@/components/ContactUs';
import * as React from 'react';

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="container">
      <div className="main-content">QUAN LY</div>

      <ContactUs />
    </div>
  );
}
