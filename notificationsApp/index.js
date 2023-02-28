const Notification = (props) => {
  const { containerClassName, iconUrl, message } = props;
  return (
    <div className={containerClassName}>
      <img src={iconUrl} className="icon" />
      <p className="message">{message}</p>
    </div>
  );
  //  Write your code here.
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      containerClassName="first"
      iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      message="Information Message"
    />
    <Notification
      containerClassName="second"
      iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      message="Success Message"
    />
    <Notification
      containerClassName="third"
      iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      message="Warning Message"
    />
    <Notification
      containerClassName="forth"
      iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      message="Error Message"
    />
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
