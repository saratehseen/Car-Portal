import Link from 'next/link';
import React from 'react';
import footerStyles from '../styles/footer.module.scss'

export default function Foooter() {
  return (
   <footer>
    <div className={footerStyles.copyrights}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>All Rights Reserved © 2023 | <Link href="/"><a title="Car Portal"> Car Portal</a></Link></p>
          </div>
        </div>
      </div>
    </div>
   </footer>
  ) 
}