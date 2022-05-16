import React, { useState } from "react";
import styled from 'styled-components'
import Pick from './pick'

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .results {
    text-align: center;
    h2 {
      text-transform: uppercase;
      font-size: 40px;
      margin: 10px;
    }
  }
  .line {
    display: ${({ playing }) => !playing ? 'block' : 'none'};
    height: 14px;
    background: rgba(0,0,0,.2);
    position: absolute;
    width: 200px;
    top: 58px;
    &:before {
      content: '';
      height: 14px;
      background: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }

    &:after {
      content: '';
      height: 14px;
      background: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 300px 300px;
    ${({ playing, results }) => (playing && results) && 'grid-template-columns: 300px 110px 110px 300px;'}

    & div:nth-of-type(3) {
      ${({ playing, results }) => (playing && results) && 'grid-column: 2 / 4; grid-row: 1;'}
    }
    .line {
      width: 300px;
    }
    .results {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .in-game {
      font-size: 1.2em;
      display: flex;
      flex-direction: column;
      > div {
        order: 2;
      }
      > p {
        order: 1;
        margin-bottom: 2em;
      }
    }
  }
`
const elements = [
    'paper',
    'scissors',
    'rock',
]

const Table = (props) => {
    const [score, setScore] = useState(0)
    const [results, setResults] = useState('')
    const [comPick, setComPick] = useState('default')
    const [playing, setPlaying] = useState(false)
    const [pick, setPick] = useState('')
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const launchComPick = () => {
        return new Promise((resolve, reject) => {
            let pick
            const interval = setInterval(() => {
                pick = elements[getRandomInt(0, 3)]
                setComPick(pick)
            }, 75)
            setTimeout(() => {
                clearInterval(interval)
                resolve(pick)
            }, 2000)
        })
    }
    const onClick = async (name) => {
        setPlaying(true)
        setPick(name)
        const house = await launchComPick()
        const results = gameStart(name, house)
        setResults(results)
        if (results === 'win') {
            let newScore = score + 1
            setScore(newScore)
            props.onPlay(newScore)
        }
    }
    const gameStart = (pick, comPick) => {
        if (comPick === pick) {
            return 'draw'
        }
        if (pick === 'paper') {
            if (comPick === 'scissors') {
                return 'lose'
            }
            if (comPick === 'rock') {
                return 'win'
            }
        }
        if (pick === 'scissors') {
            if (comPick === 'paper') {
                return 'win'
            }
            if (comPick === 'rock') {
                return 'lose'
            }
        }
        if (pick === 'rock') {
            if (comPick === 'paper') {
                return 'lose'
            }
            if (comPick === 'scissors') {
                return 'win'
            }
        }
    }
    const handleTryAgainClick = () => {
        setPlaying(false)
        setResults('')
    }
    return (
        <TableStyled playing={playing} results={(results !== '')}>
            <span className="line"></span>
            {
                !playing ? (
                    <>
                        <Pick name="paper" onClick={onClick} />
                        <Pick name="scissors" onClick={onClick} />
                        <Pick name="rock" onClick={onClick} />
                    </>
                ) : (
                    <>
                        <div className="in-game">
                            <Pick playing={playing} name={pick} isShadowAnimated={(results === 'win')} />
                            <p className="mt-2 text-white">You Picked</p>
                        </div>
                        <div className="in-game">
                            <Pick playing={playing} name={comPick} isShadowAnimated={(results === 'lose')} />
                            <p className="mt-2 text-white">The COM Picked</p>
                        </div>
                        <div className="results">
                            {
                                results && (
                                    <>
                                        <h2 className="text-white font-bold">YOU {results}</h2>

                                        <button className="bg-white rounded-md py-5 px-8" onClick={handleTryAgainClick}>
                                            Try Again
                                        </button>
                                        <button className="py-5 px-7 md:mt-8 ml-2 md:ml-0 bg-green-400 hover:bg-green-500 text-center rounded-md transition-[0.5s]">End Game</button>
                                    </>
                                )
                            }
                        </div>
                    </>
                )
            }
        </TableStyled>
    )
}

export default Table