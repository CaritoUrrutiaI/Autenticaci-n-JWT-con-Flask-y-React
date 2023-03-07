import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Bienvenidos</h1>
			<div className="alert alert-info"></div>
			<p>
				<img src="https://img.freepik.com/vector-gratis/ilustracion-colorida-programador-femenino-trabajando_23-2148277397.jpg"/>
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
		</div>
	);
};
