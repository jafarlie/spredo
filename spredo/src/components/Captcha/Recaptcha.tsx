// components/ReCaptcha.js
// import ReCAPTCHA from "react-google-recaptcha";

type CaptchaChangeHandler = (value: string | null) => void;
type CaptchaComponentProps = {
  onChange: CaptchaChangeHandler;
};

function CaptchaComponent({ onChange }: CaptchaComponentProps) {
  return (
    <div>
      {/* <ReCAPTCHA
        sitekey="6LcXENIoAAAAAM1KNlIpPAVfxw85GdDamfswFny5" // replace with your Site Key
        onChange={onChange}
      /> */}
    </div>
  );
}

export default CaptchaComponent;
