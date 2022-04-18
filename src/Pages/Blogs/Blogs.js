import React from 'react';

const Blogs = () => {
  return (
    <>
      <div>
        <h3>Difference between authorization and authentication?</h3>
        <p>
          <strong>Authentication</strong> is the process of verifying who
          someone is, and <strong>Authorization</strong> is the process of
          verifying what specific applications, files, and data a user has
          access to.
          <strong>Authentication</strong> verifies who the user is.It works
          through passwords, one-time pins, biometric information, and other
          information provided or entered by the user.It is the first step of a
          good identity and access management process.is visible to and
          partially changeable by the user. On the other side ,
          <strong>Authorization </strong>
          determines what resources a user can access.It works through settings
          that are implemented and maintained by the organization.It always
          takes place after authentication.It isn't visible to or changeable by
          the user.
        </p>
      </div>

      <div>
        <h3>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          <strong>The reason of using firebase are </strong> Firebase is an
          application development platform that allows developers to create iOS,
          Android, and Web apps. It offers many features to easily work with
          backend development tool for web and mobile apps.It also offers active
          backend as a service for building dynamic web and mobile apps. When a
          client-side app build with JavaScript or any of its
          frameworks,Firebase turn that app into a serverless app in no time. It
          also removes the need of managing databases. With Firebase, it's
          pretty simple to connect and use built-in third-party authentication
          providers, including Google, Facebook, Twitter, among others. And also
          very easy to use a pre-built authentication UI, Firebase saves a
          significant amount of development cost. Firebase is a good choice to
          deploy a working product on the cloud.
          <strong>
            Other options to implement authentication systems without firebase
            are{' '}
          </strong>
          HTTP Authentication Schemes (Basic & Bearer), API Keys, OAuth (2.0),
          OpenID Connect, Auth0, jwt authetication.
        </p>
      </div>

      <div>
        <h3>
          What other services does firebase provide other than authentication ?
        </h3>
        <p>
          There are many services which Firebase provides except
          <strong> Authentication</strong>. They are{' '}
          <strong>Cloud Messaging</strong> to implement notifications,
          irrespective of the platform because it is fast, reliable, and
          scalable to handle all the requests. Moreover, using this service as
          it's free of charge is majorly used to generate deep links that
          redirect user traffic to your landing page, website, or mobile
          applications. They also provide custom domain names. ,
          <strong>Cloud Firestore</strong>,<strong>Cloud Functions</strong>,
          <strong>Hosting</strong> ,<strong>Cloud Storage</strong>,
          <strong>Google Analytics</strong> provides visualization of all this
          information on just a single tap. It is widely used in web
          applications as well,
          <strong>Dynamic Links</strong> is majorly used to generate deep links
          that redirect user traffic to your landing page, website, or mobile
          applications. They also provide custom domain names,
          <strong>Remote Config</strong> helps in remotely changing web
          application UI and content, without publishing it again.
        </p>
      </div>
    </>
  );
};

export default Blogs;
