import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  cargarNaves,
  clearActive,
  mostrarNave,
  ocultarNave,
  playAgain,
  setActiveNave,
} from "../../actions/memorice";
import { naves } from "../../data/naves";
import { Instruciones } from "../ui/Instruciones";
import {
  startAddRank,
  startGetBestRank,
  startRank,
  startUpdateBestRank,
} from "../../actions/rank";
import { restaurasNaves } from "../../helpers/restaurarNaves";

export const MemoriceJuego = () => {
  const dispatch = useDispatch();
  const [click, setclick] = useState(0);
  const [cont, setCont] = useState(0);

  const { active, naveS } = useSelector((state) => state.memorice);
  const { start, bestScore } = useSelector((state) => state.rank);
  const { navBar } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(startGetBestRank());
    dispatch(startRank(new Date()));
  }, [dispatch]);

  const handleClick = (nave) => {
    if (click < 2) {
      nave.modo = "descubierto";
      setclick(click + 1);
      dispatch(mostrarNave(nave));
      if (!active) {
        dispatch(setActiveNave(nave));
      } else {
        if (active.name === nave.name) {
          dispatch(clearActive());
          setclick(0);
          setCont(cont + 1);
          if (cont + 1 === naveS.length / 2) {
            const finish = new Date();
            const time = parseInt(finish.getTime() - start.getTime()) / 1000;
            Swal.fire(
              "Felicitaciones",
              `<h1> Has ganado en <b style="color:red">${time}<b> seg </h1>`,
              "success"
            );
            if (!bestScore) {
              dispatch(startAddRank(time));
            } else if (time < bestScore.time) {
              const id = bestScore.id;
              dispatch(startUpdateBestRank(time, id));
            }
          }
        } else {
          setTimeout(() => {
            nave.modo = "oculto";
            dispatch(ocultarNave(nave));
            active.modo = "oculto";
            dispatch(ocultarNave(active));
            dispatch(clearActive());
            setclick(0);
          }, 1000);
        }
      }
    }
  };

  const handlePlayAgain = () => {
    console.log("click");
    setclick(0);
    setCont(0);
    restaurasNaves(naves);
    dispatch(playAgain());
    dispatch(startRank(new Date()));
    dispatch(
      cargarNaves(
        naves.sort(function () {
          return Math.random() - 0.5;
        })
      )
    );
  };

  return (
    <div
      className={`${
        navBar ? "memorice__juego-navBar" : "memorice__juego-noNavBAr"
      } memorice__juego`}
    >
      <Instruciones />
      <div className="memorice__juego-cards">
        {naveS.map((nave) =>
          nave.modo === "oculto" ? (
            <div
              className="memorice__card memorice__card-img-oculta "
              key={nave.id}
              onClick={(e) => handleClick(nave)}
            ></div>
          ) : (
            <div className="memorice__card" key={nave.id}>
              <img
                className="memorice__card-img"
                src={nave.img}
                alt="nashor spacial"
              />
            </div>
          )
        )}
        <div className="memorice__button">
          <FontAwesomeIcon
            className="memorice__button-play-again"
            icon={faRedo}
            size="2x"
            onClick={handlePlayAgain}
          />
        </div>
        <h4 className="memorice__button-title">Jugar otra vez</h4>
      </div>
    </div>
  );
};
