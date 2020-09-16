// import regularly as react
import React, { useState } from "react";
import Header from "./loginSignUp/header";
import RegistrationForm from "./loginSignUp/register";
import ChatPage from "./chat/chatPage"
import NavBar from "./navbar/navbar"
// import UserProfile from "./userProfile/userProfile";
// import Search from "./searchResult/search";
import Login from "./loginSignUp/login";

interface componentRenderingInfo {
	status?: string;
	chat?: string;
}

// Setting app as functional component
const App: React.FC = () => {

	const [componentRendering, setComponentRendering] = useState<componentRenderingInfo> ({
		status: "OFF",
		chat: "OFF"
	});



	const handleSubmitOne = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setComponentRendering({
			status: "SIGNUP"
		});
	};

	const handleSubmitTwo = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setComponentRendering({
			status: "LOGIN",
		});
	};

	const handleSubmitThree = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setComponentRendering({
			chat: "ON"
		});
	};
	
  return (
		<div className="app_div">
			<NavBar />
			<button
				id="go_to_search">
				Search
			</button>
			{(componentRendering.chat === "OFF") ? (
			<div>
				<button
				id="go_to_chat"
				onClick={handleSubmitThree}>
				Go to Chat
				</button>
    	<div>
				<Header />
			</div>
		<div>

			{(componentRendering.status === "OFF") ? (
				<div id="buttonGroup">
					<button
					onClick={handleSubmitOne}
					className="loginSignUpButtons"
					>
						Signup
					</button>
					<button
					onClick={handleSubmitTwo}
					className="loginSignUpButtons"
					>
						Login
					</button>
				</div>
			) : null}

			<div id="loginSignUpContainer">

				{ (componentRendering.status === "LOGIN") ? (
					<div className="logIn">
					<Login />
				</div>
				) : null}

				{ (componentRendering.status === "SIGNUP") ? (
					<div className="signUp">
						<RegistrationForm />
					</div>
				) : null}

				</div>
          
    	</div>
		</div>
			) : <ChatPage />}
		</div>
	);
};

export default App;
