import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../../context/FirebaseContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const fbase = useFirebase();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();await fbase.LoginUser(email,pass);
    // setEmail("")
    // setPass("")
  };

  useEffect(() => {
    if(fbase.isLoggedIn){
        navigate("/")
    }
  }, [fbase,navigate])
  

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
      <h4 className="mt-5">OR</h4>
      <Button onClick={fbase.googleAuth} className="btn-success">Google Auth</Button>
    </div>
  );
};

export default SignIn;
