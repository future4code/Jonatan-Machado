import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';
const boopSfx =
  'http://95.216.113.156/uv/w1/IS_-FyzjSS3ZRRpO_NjBeA,1591486716/yt:7Ys9aPc1GwA-1/Maria%20Gad%C3%BA%20-%20Bela%20Flor%20%5B%C3%81udio%20Oficial%5D.mp3';

function Player() {
  const music = localStorage.getItem('music');
  const musicReplace = music.replace(/"/g, '');

  console.log(musicReplace);
  return (
    <Container>
      {/* <Sound url={}/> */}
      <Current>
        <img
          src="https://tonimarino.co.uk/wp-content/uploads/2019/11/Dark-Side-of-the-Moon-album-cover.jpeg"
          alt="Pink Floyd"
        />
        <div>
          <span>Dark side of the moon</span>
          <small>Pink Floyd</small>
        </div>
      </Current>

      <Progress>
        <Controls>
          <button>
            <img src={ShuffleIcon} alt="Shuffle" />
          </button>
          <button>
            <img src={BackwardIcon} alt="Shuffle" />
          </button>

          {!1 ? (
            <button onClick={() => {}}>
              <img src={PlayIcon} alt="Shuffle" />
            </button>
          ) : (
            <button onClick={() => {}}>
              <img src={PauseIcon} alt="Shuffle" />
            </button>
          )}
          <button>
            <img src={ForwardIcon} alt="Shuffle" />
          </button>
          <button>
            <img src={RepeatIcon} alt="Shuffle" />
          </button>
        </Controls>

        <Time>
          <span>1:39</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#f9b24e' }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>8:25</span>
        </Time>
      </Progress>

      <Volume>
        <img src={VolumeIcon} alt="Volume" />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#fff' }}
          handleStyle={{ display: 'none' }}
          value={100}
        />
      </Volume>
    </Container>
  );
}

export default Player;
