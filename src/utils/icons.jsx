import { faArrowUp, faBolt, faBoltLightning, faCode, faCompactDisc, faDownload, faExpand, faForward, faHeadphonesSimple, faHeart, faHome, faMagnifyingGlass, faMaximize, faPaperPlane, faPause, faPlay, faRadio, faSplotch, faVolumeHigh, faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const icons = {
    close: <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>,
    maximize: <FontAwesomeIcon icon={faExpand} ></FontAwesomeIcon>,
    minimize: <FontAwesomeIcon icon={faWindowMinimize}></FontAwesomeIcon>,
    download: <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>,
    bolt: <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>,
    arrow: <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>,
    search: <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>,
    home: <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>,
    library: <FontAwesomeIcon icon={faHeadphonesSimple}></FontAwesomeIcon>,
    heart: <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>,
    play: <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>,
    pause: <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>,
    next: <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>,
    queue: <FontAwesomeIcon icon={faRadio}></FontAwesomeIcon>,
    volume_high: <FontAwesomeIcon icon={faVolumeHigh}></FontAwesomeIcon>,
    logo: <FontAwesomeIcon icon={faCompactDisc}></FontAwesomeIcon>
}