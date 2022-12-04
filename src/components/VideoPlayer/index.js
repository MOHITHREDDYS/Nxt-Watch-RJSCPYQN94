import ReactPlayer from 'react-player'

import {ResponsiveContainer} from './styledComponents'

const VideoPlayer = props => {
  const {videoUrl} = props
  return (
    <ResponsiveContainer>
      <ReactPlayer url={videoUrl} height="100%" width="100%" controls />
    </ResponsiveContainer>
  )
}

export default VideoPlayer
