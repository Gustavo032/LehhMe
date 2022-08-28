import { useEffect, useState } from "react";
import { AlignJustify, ChevronLeft, ChevronRight, Delete, X } from 'react-feather';
import { Button } from "./Button";
import '../styles/sidebar.scss';
import { useMovies } from "../MoviesContext";
import axios from "axios";


interface GenreResponseProps {
  id: number;
  name: 'action' | 'manga' | 'magia' | 'romance' | 'family';
  title: string;
}


export function SideBar() {
  // Complete aqui

  const {handleClickButton, selectedGenreId} = useMovies()
  const [statusSidebar, setStatusSidebar] = useState(true)


  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    axios.get<GenreResponseProps[]>('https://server-read-me.vercel.app/genres/db.json').then(response => {
      setGenres(response.data);
    });
  }, []);

  return statusSidebar ? (	
  		<nav className="sidebar">
			<div className="sideHeader">
				<span>Lehh<p>Me</p></span>  
				<ChevronLeft className="iconCloseSidebar" onClick={() => setStatusSidebar(false)}/>
			</div>


			<div className="buttons-container">
				{genres.map(genre => (
				<Button
					key={String(genre.id)}
					title={genre.title}
					iconName={genre.name}
					onClick={() => {handleClickButton(genre.id); setStatusSidebar(false)}}
					selected={selectedGenreId === genre.id}
				/>
				))}
			</div>		
		</nav>) :(
  		<nav className="sidebar disabled">
			<div className="openSideBarButton" onClick={() => setStatusSidebar(true)}>
				<ChevronRight className="iconOpenMore"/> 
			</div>
		</nav>
		)
}