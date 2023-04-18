import React from "react";
import { Link } from "react-router-dom";

export default function Privacypolicy() {
  return (
    <div className=" my-10  lg:mx-20  font-mono    ">
      <div className="lg:block hidden">
        <Link to={"/"} className="hover:underline py-10 font-bold">
          Home &nbsp;
        </Link>
        <span>&#62;</span>

        <span className="px-5 ">Privacy Policy</span>
      </div>

      <h1 className="text-center  text-5xl my-10 font-bold ">Privacy Policy</h1>

      <div className="m-10 space-y-5 ">
        <h2 className="my-2 text-2xl font-semibold">WE RESPECT YOUR PRIVACY</h2>
        <p className="xm:text-xs lg:text-sm">
          Disha Publication uses and protects any information that you give when
          you use this website. If we ask you to provide certain information by
          which you can be identified when using this website, you can rest
          assured that it will only be used in accordance with this privacy
          statement. Disha Publication may change this policy in future by
          updating this page. You should check this page from time to time to
          ensure that you are happy with any changes.
        </p>
        <p className="xm:text-xs lg:text-sm">
          The team at Disha Publication is committed to ensuring that your
          privacy is protected. Wedo not share, sell, rent, or loan any
          identifiable information at the individual level regarding our
          customersto any third party. Any information you give us is handled
          with utmost care and security. This information is collected primarily
          to ensure that we are able to understand your needs, fulfill your
          orders, and improve our products and services.
        </p>
      </div>
      <div className="m-10 space-y-5">
        <h3 className="my-2 text-2xl font-semibold">What we collect</h3>
        <p className="xm:text-xs lg:text-sm">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <ol className="list-decimal xm:text-xs lg:text-sm ml-5">
          <li>Internal record keeping.</li>
          <li>To improve our products and services.</li>
          <li>
            To periodically send promotional emails to you about new products,
            special offers or other information which we think you may find
            interesting and useful.
          </li>
          <li>
            From time to time, we may also use your information to contact you
            for market research purposes. We may contact you by email, phone,
            fax or mail. We may use the information to customise the website
            according to your interests.
          </li>
        </ol>
      </div>
      <div className="m-10 space-y-5">
        <p className="my-2 text-2xl font-semibold ">Security</p>
        <p className="xm:text-xs lg:text-sm">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorised access or disclosure, we have put in place
          suitable physical, electronic and managerial procedures to safeguard
          and secure the information we collect online.
        </p>
      </div>
      <div className="m-10 space-y-5">
        <p className="my-2 text-2xl font-semibold ">Links to other websites</p>
        <p className="xm:text-xs lg:text-sm">
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, you should note that
          we do not have any control over that other website. Therefore, we
          cannot be responsible for the protection and privacy of any
          information which you provide whilst visiting such sites, and such
          sites are not governed by this privacy statement. You should exercise
          caution and look at the privacy statement applicable to the website in
          question.
        </p>
        <p className="xm:text-xs lg:text-sm">
          We will not sell, distribute or lease your personal information to
          third parties unless we have your permission or are required by law to
          do so. We may use your personal information to send you promotional
          information about third parties which we think you may find
          interesting if you tell us that you wish this to happen.
        </p>
        <p className="xm:text-xs lg:text-sm">
          You may request details of personal information which we hold about
          you under the Data Protection Act 1998. A small fee will be payable.
          If you would like a copy of the information held on you please write
          to us at
        </p>
        <p className="xm:text-xs lg:text-sm">
          If you believe that any information we are holding on you is incorrect
          or incomplete, please email us as soon as possible. We will promptly
          correct any information found to be incorrect.
        </p>
      </div>
    </div>
  );
}
