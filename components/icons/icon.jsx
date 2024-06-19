import { Svg, Path, G } from "react-native-svg";

export const Icon = ({source, style}) => {
  const IconComponent = Icons[source]
  return <IconComponent style={style} />
}

const Contact = ({style}) => (
  <Svg style={style} viewBox="-20 -20 200 200">
    <Path d="m 90.107269,90.107277 a 42.169886,42.169886 0 1 0 0,-84.3397699 42.169886,42.169886 0 1 0 0,84.3397699 z M 75.051303,105.92098 c -32.451045,0 -58.741334,26.29029 -58.741334,58.74133 0,5.40301 4.381714,9.78472 9.784731,9.78472 h 128.02514 c 5.40301,0 9.78473,-4.38171 9.78473,-9.78472 0,-32.45104 -26.29029,-58.74133 -58.74134,-58.74133 z" />
  </Svg>
)

const Personal = ({style}) => (
  <Svg style={style} viewBox="-20 -20 200 200">
    <Path d="m 90.107269,90.107277 a 42.169886,42.169886 0 1 0 0,-84.3397699 42.169886,42.169886 0 1 0 0,84.3397699 z M 75.051303,105.92098 c -32.451045,0 -58.741334,26.29029 -58.741334,58.74133 0,5.40301 4.381714,9.78472 9.784731,9.78472 h 128.02514 c 5.40301,0 9.78473,-4.38171 9.78473,-9.78472 0,-32.45104 -26.29029,-58.74133 -58.74134,-58.74133 z" />
  </Svg>
)

const Highlights = ({style}) => (
  <Svg style={style} viewBox="0 0 180 180">
    <Path d="m 103.08255,107.98661 48.24858,-65.488917 -8.92477,-8.955228 -65.519373,48.248577 z m -56.960122,1.52299 v 0 -21.839785 c 0,-4.660374 2.193117,-9.01615 5.939692,-11.757546 L 135.24827,14.59637 c 2.25404,-1.675298 4.99543,-2.558637 7.79775,-2.558637 3.47244,0 6.82303,1.370698 9.29029,3.837955 l 16.69206,16.692058 c 2.46725,2.467257 3.83795,5.787392 3.83795,9.290288 0,2.802316 -0.88334,5.543712 -2.55864,7.797749 l -61.3159,83.155687 c -2.74139,3.74658 -7.12763,5.9397 -11.75754,5.9397 H 75.363989 L 67.62716,146.488 c -3.807495,3.80749 -9.990867,3.80749 -13.798362,0 l -15.4432,-15.4432 c -3.807495,-3.8075 -3.807495,-9.99087 0,-13.79836 z m -36.8565511,44.56293 19.1897741,-19.18978 21.504732,21.50473 -9.442588,9.44259 c -1.370698,1.3707 -3.228755,2.1322 -5.178193,2.1322 H 14.44407 c -4.051175,0 -7.3103903,-3.25922 -7.3103903,-7.31039 v -1.43162 c 0,-1.94944 0.761499,-3.8075 2.1321972,-5.17819 z" />
  </Svg>
)

const Objective = ({style}) => (
  <Svg style={style} viewBox="-10 -10 190 190">
    <Path d="M 151.64718,90 A 61.647179,61.647179 0 1 0 28.352822,90 61.647179,61.647179 0 1 0 151.64718,90 Z M 7.8037631,90 A 82.196238,82.196238 0 1 1 172.19624,90 82.196238,82.196238 0 1 1 7.8037631,90 Z m 82.1962379,25.68632 a 25.686324,25.686324 0 1 0 0,-51.372643 25.686324,25.686324 0 1 0 0,51.372643 z m 0,-71.921702 a 46.235383,46.235383 0 1 1 0,92.470762 46.235383,46.235383 0 1 1 0,-92.470762 z M 79.725471,90 a 10.27453,10.27453 0 1 1 20.549059,0 10.27453,10.27453 0 1 1 -20.549059,0 z" />
  </Svg>
)

const Summary = ({style}) => (
  <Svg style={style} viewBox="-10 -10 190 190">
    <Path d="m 21.624699,19.584373 c -10.79212,0 -19.56645,9.035745 -19.56645,20.149398 V 140.48076 c 0,11.11366 8.77433,20.14941 19.56645,20.14941 H 158.58985 c 10.79211,0 19.56644,-9.03575 19.56644,-20.14941 V 39.733771 c 0,-11.113653 -8.77433,-20.149398 -19.56644,-20.149398 z m 24.458059,80.597597 h 19.566451 c 13.513078,0 24.458062,11.27106 24.458062,25.18675 0,2.77055 -2.201227,5.03734 -4.891613,5.03734 H 26.516311 c -2.690387,0 -4.891612,-2.26679 -4.891612,-5.03734 0,-13.91569 10.944982,-25.18675 24.458059,-25.18675 z M 36.299536,69.957868 a 19.56645,20.149399 0 1 1 39.132897,0 19.56645,20.149399 0 1 1 -39.132897,0 z M 114.56533,59.88317 h 39.1329 c 2.69039,0 4.89162,2.266807 4.89162,5.037349 0,2.770542 -2.20123,5.037349 -4.89162,5.037349 h -39.1329 c -2.69038,0 -4.89161,-2.266807 -4.89161,-5.037349 0,-2.770542 2.20123,-5.037349 4.89161,-5.037349 z m 0,20.149397 h 39.1329 c 2.69039,0 4.89162,2.266807 4.89162,5.03735 0,2.770541 -2.20123,5.037349 -4.89162,5.037349 h -39.1329 c -2.69038,0 -4.89161,-2.266808 -4.89161,-5.037349 0,-2.770543 2.20123,-5.03735 4.89161,-5.03735 z m 0,20.149403 h 39.1329 c 2.69039,0 4.89162,2.26681 4.89162,5.03735 0,2.77054 -2.20123,5.03735 -4.89162,5.03735 h -39.1329 c -2.69038,0 -4.89161,-2.26681 -4.89161,-5.03735 0,-2.77054 2.20123,-5.03735 4.89161,-5.03735 z" />
  </Svg>
)

const Experience = ({style}) => (
  <Svg style={style} viewBox="-10 -10 190 190">
    <Path d="m 67.33385,29.556922 h 45.33229 c 1.38517,0 2.51847,1.133309 2.51847,2.518462 V 44.667698 H 64.815387 V 32.075384 c 0,-1.385153 1.13331,-2.518462 2.518463,-2.518462 z M 49.704621,32.075384 V 44.667698 H 29.556928 c -11.112705,0 -20.1476918,9.034976 -20.1476918,20.147683 V 95.036923 H 69.852312 110.14769 170.59077 V 64.815381 c 0,-11.112707 -9.03499,-20.147683 -20.1477,-20.147683 H 130.29539 V 32.075384 c 0,-9.727553 -7.90168,-17.629229 -17.62924,-17.629229 h -45.3323 c -9.727553,0 -17.629229,7.901676 -17.629229,17.629229 z M 170.59076,105.11076 h -60.44308 v 10.07386 c 0,5.57209 -4.50175,10.07384 -10.07385,10.07384 H 79.926154 c -5.572092,0 -10.073842,-4.50175 -10.073842,-10.07384 V 105.11076 H 9.4092362 v 40.29539 c 0,11.1127 9.0349868,20.1477 20.1476918,20.1477 H 150.44306 c 11.11272,0 20.1477,-9.035 20.1477,-20.1477 z" id="path2433" />
  </Svg>
)

const Education = ({style}) => (
  <Svg style={style} viewBox="0 0 180 180" >
    <Path d="m 90.002101,27.320676 c -2.20855,0 -4.38983,0.39167 -6.46204,1.14703 L 7.0589816,56.807756 c -2.590269,0.97917 -4.308025,3.49704 -4.308025,6.32265 0,2.82561 1.717756,5.34349 4.308025,6.32266 l 15.7870034,5.84706 c -4.471621,7.2179 -7.007357,15.75068 -7.007357,24.731094 v 7.86136 c 0,7.94529 -2.944727,16.14236 -6.0803144,22.6049 -1.772289,3.63691 -3.789972,7.21789 -6.134846,10.51911 -0.872511,1.20298 -1.117905,2.76965 -0.627118,4.19644 0.490788,1.4268 1.635959,2.4899 3.05379,2.85359 l 17.4502294,4.47622 c 1.145171,0.30775 2.372141,0.084 3.380982,-0.55953 1.008841,-0.64344 1.717757,-1.70656 1.935884,-2.90953 2.344875,-11.97389 1.172438,-22.7168 -0.572585,-30.41031 -0.872511,-3.97265 -2.044949,-8.02922 -3.680908,-11.75006 v -6.88219 c 0,-8.448854 2.78113,-16.422124 7.607209,-22.800724 3.517312,-4.33634 8.07073,-7.83338 13.414862,-9.98756 l 42.807588,-17.26142 c 2.23582,-0.89524 4.77155,0.22382 5.64406,2.51788 0.87252,2.29406 -0.21812,4.89586 -2.45394,5.7911 l -42.807587,17.26141 c -3.380982,1.37085 -6.352974,3.46907 -8.779646,6.0429 l 43.516503,16.11438 c 2.07222,0.75536 4.2535,1.14703 6.46204,1.14703 2.20855,0 4.38983,-0.39167 6.46204,-1.14703 l 76.508349,-28.25612 c 2.59027,-0.9512 4.30802,-3.49705 4.30802,-6.32266 0,-2.82561 -1.71775,-5.34348 -4.30802,-6.32265 L 96.464141,28.467706 c -2.07222,-0.75536 -4.2535,-1.14703 -6.46204,-1.14703 z M 37.651414,132.51177 c 0,9.87566 23.448744,20.14297 52.350687,20.14297 28.901949,0 52.350679,-10.26731 52.350679,-20.14297 L 138.18109,91.834146 99.408861,106.21399 c -3.02652,1.11907 -6.21664,1.67859 -9.40676,1.67859 -3.19012,0 -6.40751,-0.55952 -9.40677,-1.67859 L 41.823108,91.834146 Z" />
  </Svg>
)

const Volunteer = ({style}) => (
  <Svg style={style} viewBox="0 0 180 180">
    <Path d="M 152.61125,88.029422 V 88.95182 L 172.0934,69.469664 c 6.12136,-6.121368 6.12136,-16.016178 0,-22.137546 L 150.26332,25.529993 c -6.12138,-6.121368 -16.01619,-6.121368 -22.13754,0 l -11.20854,11.20853 c -0.75469,-0.08385 -1.53731,-0.139746 -2.31998,-0.139746 h -31.3056 c -10.370008,0 -18.895177,7.826404 -20.013254,17.888924 h -0.111682 v 33.541721 c 0,6.177271 5.003307,11.18058 11.180586,11.18058 6.177252,0 11.180587,-5.003309 11.180587,-11.18058 V 67.904383 c 0,0 0,-0.02806 0,-0.02806 v -4.444279 h 4.472216 38.013987 c 0,0 0,0 0.0289,0 h 2.20815 c 12.35456,0 22.36116,10.006614 22.36116,22.361155 z M 94.472215,72.376612 v 15.65281 c 0,11.124677 -9.000363,20.125038 -20.125022,20.125038 -11.124688,0 -20.125048,-9.000361 -20.125048,-20.125038 V 54.879009 C 44.187586,56.611999 35.830107,63.907326 32.979048,73.941896 L 28.367057,90.041927 7.9066021,110.50238 c -6.1213651,6.12138 -6.1213651,16.01619 0,22.13756 L 29.736673,154.47 c 6.121384,6.12138 16.0162,6.12138 22.137552,0 l 10.537702,-10.53768 c 0.251714,0 0.503111,0.0289 0.754681,0.0289 h 44.722322 c 7.40711,0 13.41667,-6.00959 13.41667,-13.41671 0,-1.56529 -0.27949,-3.07466 -0.75468,-4.47222 h 0.75468 c 7.40716,0 13.41672,-6.00956 13.41672,-13.4167 0,-3.57779 -1.39757,-6.82016 -3.68959,-9.22397 7.18351,-1.39757 12.6061,-7.714608 12.63405,-15.3174 v -0.111798 c -0.0289,-8.609046 -7.01581,-15.596908 -15.6528,-15.596908 0,0 0,0 0,0 H 94.472217 Z"/>
  </Svg>
)

const Skills = ({style}) => (
  <Svg style={style} viewBox="-20 -20 200 200">
    <Path d="M 99.541926,10.939896 C 97.781561,7.2863032 94.061532,4.9612876 89.976142,4.9612876 c -4.085379,0 -7.772196,2.3250156 -9.565784,5.9786084 l -21.356937,43.94282 -47.696064,7.041486 c -3.9857436,0.597867 -7.3071964,3.387883 -8.5361338,7.207554 -1.2289373,3.819669 -0.2325015,8.037916 2.6239482,10.861145 l 34.6095396,34.244189 -8.170774,48.39356 c -0.664291,3.98574 0.996437,8.03792 4.284675,10.39615 3.288239,2.35823 7.63934,2.65716 11.22651,0.76394 L 90.009366,151.0388 132.6236,173.79074 c 3.58717,1.89322 7.93827,1.62752 11.22652,-0.76394 3.28823,-2.39145 4.94897,-6.41041 4.28467,-10.39615 l -8.20398,-48.39356 34.60951,-34.244189 c 2.85647,-2.823229 3.8861,-7.041476 2.62397,-10.861145 -1.26217,-3.819671 -4.55041,-6.609687 -8.53616,-7.207554 l -47.72925,-7.041486 z" />
  </Svg>
)

const Certificates = ({style}) => (
  <Svg style={style} viewBox="0 0 180 180">
    <Path d="m 83.946925,6.7262814 c 3.656117,-2.4263276 8.442308,-2.4263276 12.098415,0 l 5.91626,3.8887826 c 1.99425,1.296263 4.32087,1.927774 6.68073,1.794826 l 7.07957,-0.432088 c 4.38733,-0.265897 8.50877,2.127197 10.46979,6.049212 l 3.19078,6.348352 c 1.0636,2.127188 2.79194,3.822298 4.88591,4.885897 l 6.41482,3.224029 c 3.92201,1.961007 6.31512,6.082445 6.04922,10.469789 l -0.4321,7.07957 c -0.13295,2.359853 0.49857,4.719706 1.79482,6.680723 l 3.92202,5.916254 c 2.42633,3.656127 2.42633,8.442308 0,12.098425 l -3.92202,5.949496 c -1.29625,1.99424 -1.92777,4.32087 -1.79482,6.680724 l 0.4321,7.079579 c 0.2659,4.387334 -2.12721,8.508768 -6.04922,10.469768 l -6.34835,3.1908 c -2.12719,1.0636 -3.8223,2.79194 -4.8859,4.88591 l -3.22403,6.41481 c -1.96101,3.92202 -6.08246,6.31512 -10.46978,6.04922 l -7.07958,-0.43209 c -2.35985,-0.13295 -4.71971,0.49857 -6.68071,1.79482 l -5.916268,3.92202 c -3.656117,2.42633 -8.442308,2.42633 -12.098425,0 l -5.949496,-3.92202 c -1.994239,-1.29625 -4.320864,-1.92777 -6.680718,-1.79482 l -7.079576,0.43209 c -4.387339,0.2659 -8.508779,-2.1272 -10.469782,-6.04922 l -3.190791,-6.34834 c -1.063599,-2.1272 -2.791948,-3.82231 -4.885901,-4.88591 l -6.414827,-3.22404 c -3.922015,-1.96099 -6.315113,-6.082422 -6.049214,-10.469766 l 0.432088,-7.079579 c 0.13295,-2.359844 -0.498562,-4.719716 -1.794815,-6.680714 l -3.88878,-5.949506 c -2.426334,-3.656107 -2.426334,-8.442298 0,-12.098424 l 3.88878,-5.916245 c 1.296253,-1.994259 1.927765,-4.32087 1.794815,-6.680733 l -0.432088,-7.079569 c -0.265899,-4.387335 2.127199,-8.508782 6.049214,-10.46979 l 6.348351,-3.190787 c 2.127192,-1.096841 3.85554,-2.825183 4.91914,-4.952371 l 3.190791,-6.348352 c 1.961002,-3.922015 6.082443,-6.315109 10.469782,-6.049212 l 7.079575,0.432088 c 2.359854,0.132948 4.719717,-0.498563 6.680724,-1.794826 z M 116.58607,68.714073 a 26.589939,26.589939 0 1 0 -53.179869,0 26.589939,26.589939 0 1 0 53.179869,0 z M 26.612372,151.74116 40.937703,117.6728 c 0.06648,0.0332 0.09971,0.0665 0.13295,0.13295 l 3.19079,6.34835 c 3.888777,7.71108 11.965469,12.39755 20.607199,11.89898 l 7.079575,-0.43208 c 0.06649,0 0.166188,0 0.232662,0.0665 l 5.916256,3.92202 c 1.69511,1.09682 3.489937,1.96101 5.351228,2.55928 l -12.49727,29.68104 c -0.764462,1.82806 -2.459565,3.05785 -4.420577,3.22403 -1.961011,0.16619 -3.85554,-0.73122 -4.919139,-2.39309 L 50.908923,156.2947 32.262736,159.05339 c -1.894535,0.26591 -3.789065,-0.49855 -4.985614,-1.99424 -1.19655,-1.49567 -1.429213,-3.5564 -0.697987,-5.31797 z m 82.428788,20.0754 -12.497248,-29.64779 c 1.861291,-0.59827 3.656108,-1.42921 5.351218,-2.55927 l 5.91626,-3.92202 c 0.0665,-0.0332 0.13295,-0.0665 0.23267,-0.0665 l 7.07956,0.4321 c 8.64173,0.49855 16.71842,-4.18792 20.6072,-11.899 l 3.1908,-6.34835 c 0.0332,-0.0665 0.0665,-0.0997 0.13295,-0.13295 l 14.35856,34.06837 c 0.73122,1.76157 0.46532,3.78906 -0.69798,5.31797 -1.16331,1.52892 -3.09109,2.29339 -4.98562,1.99424 l -18.6462,-2.75869 -10.70245,16.35281 c -1.06358,1.66187 -2.95812,2.55928 -4.91913,2.3931 -1.96101,-0.16619 -3.65612,-1.42921 -4.42059,-3.22404 z" />
  </Svg>
)

const Projects = ({style}) => (
  <Svg style={style} viewBox="-10 -10 190 190">
    <Path d="M 29.439986,160.88577 H 150.77456 c 11.15393,0 20.22242,-9.0685 20.22242,-20.22243 V 59.773628 c 0,-11.153933 -9.06849,-20.222429 -20.22242,-20.222429 h -50.55607 c -3.191356,0 -6.193123,-1.485085 -8.088976,-4.044485 L 86.062787,27.417742 C 82.239483,22.330538 76.235949,19.32877 69.884842,19.32877 H 29.439986 c -11.153934,0 -20.2224293,9.068496 -20.2224293,20.222429 V 140.66334 c 0,11.15393 9.0684953,20.22243 20.2224293,20.22243 z" />
  </Svg>
)

const Languages = ({style}) => (
  <Svg style={style} viewBox="2 -10 175 175">
    <Path d="m 1.3824933,54.552998 c 0,-9.775619 7.9478827,-17.723502 17.7235017,-17.723502 H 72.276499 85.569125 90 160.89401 c 9.77561,0 17.7235,7.947883 17.7235,17.723502 V 125.447 c 0,9.77562 -7.94789,17.7235 -17.7235,17.7235 H 90 85.569125 72.276499 19.105995 c -9.775619,0 -17.7235017,-7.94788 -17.7235017,-17.7235 z M 90,54.552998 V 125.447 h 70.89401 V 54.552998 Z M 50.759061,67.817931 c -0.886175,-1.993894 -2.880069,-3.295464 -5.067814,-3.295464 -2.187745,0 -4.181639,1.30157 -5.067814,3.295464 L 22.899932,107.69581 c -1.246184,2.79699 0.02769,6.06476 2.824683,7.31094 2.79699,1.24619 6.06476,-0.0277 7.310944,-2.82468 l 2.464674,-5.56629 H 55.88226 l 2.464675,5.56629 c 1.246183,2.79699 4.513954,4.04317 7.310944,2.82468 2.79699,-1.21849 4.043174,-4.51395 2.824683,-7.31094 z m -5.067814,15.868072 5.261664,11.852591 H 40.429582 Z M 125.447,64.522467 c 3.04623,0 5.5386,2.492367 5.5386,5.538594 v 1.107719 h 12.1849 4.43088 c 3.04623,0 5.53859,2.492367 5.53859,5.538594 0,3.046227 -2.49236,5.538594 -5.53859,5.538594 h -0.55386 l -0.44309,1.246184 c -2.46467,6.757085 -6.20322,12.904924 -10.96641,18.111198 0.24923,0.16616 0.49847,0.30463 0.74771,0.44309 l 5.23397,3.12931 c 2.63083,1.5785 3.46162,4.98473 1.91081,7.58787 -1.5508,2.60314 -4.98473,3.46162 -7.58787,1.91082 l -5.23397,-3.12931 c -1.24619,-0.74771 -2.43698,-1.52311 -3.62778,-2.3539 -2.93546,2.07697 -6.06476,3.87701 -9.41561,5.37244 l -0.99695,0.44308 c -2.79699,1.24619 -6.06476,-0.0277 -7.31094,-2.82468 -1.24619,-2.79699 0.0277,-6.06476 2.82468,-7.31094 l 0.99695,-0.44309 c 1.77235,-0.8031 3.48931,-1.68927 5.1232,-2.71391 l -3.37855,-3.378546 c -2.16005,-2.160052 -2.16005,-5.677059 0,-7.83711 2.16006,-2.160052 5.67706,-2.160052 7.83711,0 l 4.04318,4.043173 0.13846,0.138465 c 3.43393,-3.627779 6.23092,-7.83711 8.25251,-12.461837 H 125.447 105.50806 c -3.04622,0 -5.53859,-2.492367 -5.53859,-5.538594 0,-3.046226 2.49237,-5.538594 5.53859,-5.538594 h 14.40035 v -1.107719 c 0,-3.046226 2.49237,-5.538594 5.53859,-5.538594 z" />
  </Svg>
)

const Publications = ({style}) => (
  <Svg style={style} viewBox="-20 -20 200 200">
    <Path d="m 38.345329,38.345328 c 0,-11.396312 9.265557,-20.661868 20.661869,-20.661868 H 151.9856 c 11.39632,0 20.66188,9.265556 20.66188,20.661868 V 141.65467 c 0,11.39632 -9.26556,20.66188 -20.66188,20.66188 H 33.179862 c -14.269604,0 -25.8273371,-11.55774 -25.8273371,-25.82734 V 48.676263 c 0,-5.714299 4.6166361,-10.330935 10.3309351,-10.330935 5.714297,0 10.330933,4.616636 10.330933,10.330935 v 87.812947 c 0,2.841 2.32446,5.16546 5.165469,5.16546 2.841007,0 5.165467,-2.32446 5.165467,-5.16546 z m 20.661869,7.748201 v 25.827335 c 0,4.293795 3.454406,7.748201 7.748201,7.748201 h 36.158261 c 4.2938,0 7.74821,-3.454406 7.74821,-7.748201 V 46.093529 c 0,-4.293795 -3.45441,-7.748201 -7.74821,-7.748201 H 66.755398 c -4.293794,0 -7.7482,3.454406 -7.7482,7.748201 z m 67.151072,-2.582733 c 0,2.841007 2.32446,5.165467 5.16546,5.165467 h 15.49641 c 2.841,0 5.16546,-2.32446 5.16546,-5.165467 0,-2.841007 -2.32446,-5.165468 -5.16546,-5.165468 h -15.49641 c -2.841,0 -5.16546,2.324461 -5.16546,5.165468 z m 0,30.992802 c 0,2.841007 2.32446,5.165467 5.16546,5.165467 h 15.49641 c 2.841,0 5.16546,-2.32446 5.16546,-5.165467 0,-2.841007 -2.32446,-5.165468 -5.16546,-5.165468 h -15.49641 c -2.841,0 -5.16546,2.324461 -5.16546,5.165468 z M 59.007198,105.49641 c 0,2.841 2.32446,5.16546 5.165467,5.16546 h 82.647475 c 2.841,0 5.16546,-2.32446 5.16546,-5.16546 0,-2.84102 -2.32446,-5.16548 -5.16546,-5.16548 H 64.172665 c -2.841007,0 -5.165467,2.32446 -5.165467,5.16548 z m 0,30.9928 c 0,2.841 2.32446,5.16546 5.165467,5.16546 h 82.647475 c 2.841,0 5.16546,-2.32446 5.16546,-5.16546 0,-2.84102 -2.32446,-5.16548 -5.16546,-5.16548 H 64.172665 c -2.841007,0 -5.165467,2.32446 -5.165467,5.16548 z" />
  </Svg>
)

const References = ({style}) => (
  <Svg style={style} viewBox="0 0 180 180">
    <Path d="m 31.411862,56.521027 a 33.478936,33.478936 0 1 1 66.957872,0 33.478936,33.478936 0 1 1 -66.957872,0 z M 6.3026591,149.18967 c 0,-25.76308 20.8720249,-46.63511 46.6351129,-46.63511 h 23.906053 c 25.763095,0 46.635105,20.87203 46.635105,46.63511 0,4.28949 -3.47866,7.76817 -7.76815,7.76817 H 14.070818 c -4.2894882,0 -7.7681589,-3.47868 -7.7681589,-7.76817 z m 159.3649709,7.76817 h -36.06832 c 1.41239,-2.45861 2.24936,-5.30955 2.24936,-8.36974 v -2.09243 c 0,-15.87634 -7.08811,-30.13104 -18.25648,-39.70393 0.62773,-0.0262 1.2293,-0.0523 1.85703,-0.0523 h 16.05943 c 23.30448,0 42.18869,18.88421 42.18869,42.18869 0,4.44643 -3.60945,8.02972 -8.02971,8.02972 z M 119.29407,89.999963 c -8.10818,0 -15.43169,-3.295582 -20.741248,-8.605133 5.152618,-6.957341 8.186648,-15.562474 8.186648,-24.873803 0,-7.009652 -1.72626,-13.626973 -4.78644,-19.433477 4.8649,-3.557137 10.8545,-5.675725 17.34104,-5.675725 16.19021,0 29.29407,13.103864 29.29407,29.294069 0,16.190205 -13.10386,29.294069 -29.29407,29.294069 z" />
  </Svg>
)

const Drag = ({style}) => (
  <Svg style={style} viewBox="0 0 320 512">
    <Path d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"/>
  </Svg>
)

const Settings = ({style}) => (
  <Svg style={style} viewBox="0 0 512 512">
    <Path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
  </Svg>
)

const Back = ({style}) => (
  <Svg style={style} viewBox="0 0 512 512">
    <Path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
  </Svg>
)

const Profile = ({style}) => (
  <Svg style={style} viewBox="0 0 512 512">
    <Path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/>
  </Svg>
)

const ProfileOutline = ({style}) => (
  <Svg style={style} viewBox="0 0 512 512">
    <Path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/>
  </Svg>
)

const Templates = ({style}) => (
  <Svg style={style} viewBox="0 0 384 512">
    <Path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/>
  </Svg>
)

const TemplatesOutline = ({style}) => (
  <Svg style={style} viewBox="0 0 384 512">
    <Path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/>
  </Svg>
)

const Cog = ({style}) => (
  <Svg viewBox="0 0 91 91" style={style}>
    <Path d="M90.668,35.091c0.17-0.643,0.08-1.326-0.25-1.902L78.813,13.115c-0.695-1.195-2.225-1.607-3.422-0.914 l-9.734,5.619c-1.791-1.283-3.707-2.391-5.727-3.307V3.269c0-1.383-1.121-2.504-2.506-2.504H34.23 c-1.385,0-2.504,1.121-2.504,2.504v11.246c-1.891,0.861-3.699,1.893-5.406,3.086l-9.678-5.736 c-0.572-0.338-1.252-0.434-1.896-0.271c-0.643,0.166-1.197,0.578-1.535,1.15L1.387,32.69c-0.338,0.57-0.436,1.254-0.271,1.898 c0.166,0.643,0.578,1.195,1.15,1.533l9.682,5.734c-0.154,1.305-0.229,2.523-0.229,3.695c0,1.039,0.061,2.117,0.189,3.309 L2.16,54.491c-0.576,0.334-0.996,0.881-1.166,1.521c-0.174,0.641-0.082,1.326,0.25,1.9l11.6,20.076 c0.691,1.197,2.225,1.609,3.422,0.914l9.736-5.621c1.793,1.285,3.711,2.391,5.725,3.307v11.244c0,1.385,1.119,2.504,2.504,2.504 h23.193c1.385,0,2.506-1.119,2.506-2.504V76.589c1.889-0.859,3.697-1.895,5.402-3.088l9.684,5.736 c1.188,0.705,2.727,0.311,3.432-0.879L90.27,58.413c0.336-0.572,0.434-1.256,0.271-1.898c-0.166-0.643-0.578-1.195-1.152-1.533 l-9.676-5.734c0.156-1.314,0.23-2.518,0.23-3.695c0-1.051-0.063-2.143-0.189-3.313l9.746-5.627 C90.074,36.282,90.496,35.733,90.668,35.091z M59.242,45.55c0,7.396-6.018,13.414-13.416,13.414 c-7.396,0-13.412-6.018-13.412-13.414c0-7.393,6.016-13.41,13.412-13.41C53.225,32.14,59.242,38.157,59.242,45.55z" />
  </Svg>
)

const Resume = ({style}) => (
  <Svg style={style} viewBox="0 0 43.916 43.916">
    <Path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5 C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304 c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709 c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855 L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416 h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z" />
  </Svg>
)

const Letter = ({style}) => (
  <Svg style={style} viewBox="0 0 24 24">
    <G>
      <Path d="M10 22.0002H14C17.7712 22.0002 19.6569 22.0002 20.8284 20.8286C22 19.6571 22 17.7714 22 14.0002C22 10.229 22 8.34335 20.8284 7.17178C20.4658 6.80918 20.0343 6.5588 19.4996 6.38591C19.5 6.55544 19.5 6.72881 19.5 6.90517L19.5 9.06327C19.5 9.09263 19.5003 9.12461 19.5006 9.15893C19.5035 9.49938 19.5085 10.07 19.264 10.592C19.0195 11.1141 18.578 11.4756 18.3145 11.6913C18.2882 11.7128 18.263 11.7334 18.2407 11.752L16.7342 13.0075C15.8734 13.7248 15.1241 14.3493 14.4505 14.7825C13.7245 15.2495 12.9391 15.5949 12 15.5949C11.0609 15.5949 10.2756 15.2495 9.54949 14.7825C8.87589 14.3493 8.12661 13.7248 7.26587 13.0075L5.75937 11.752C5.73681 11.7333 5.71207 11.713 5.68551 11.6913C5.42207 11.4756 4.98056 11.1141 4.73604 10.592C4.49152 10.07 4.49648 9.49938 4.49944 9.15893C4.49973 9.12462 4.50001 9.09262 4.50001 9.06327L4.50001 6.90516C4.49999 6.72858 4.49998 6.55528 4.5004 6.38556C3.96577 6.55846 3.53442 6.80893 3.17157 7.17178C2 8.34335 2 10.229 2 14.0002C2 17.7714 2 19.6571 3.17157 20.8286C4.34314 22.0002 6.22877 22.0002 10 22.0002Z" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.71972 10.5997L8.15898 11.7991C9.99562 13.3296 10.9139 14.0949 12.0001 14.0949C13.0862 14.0949 14.0046 13.3296 15.8412 11.7991L17.2805 10.5997C17.6343 10.3048 17.8113 10.1574 17.9057 9.95578C18.0001 9.75421 18.0001 9.52389 18.0001 9.06325V7C18.0001 6.67937 18.0001 6.38054 17.9982 6.10169C17.9865 4.3306 17.9005 3.36486 17.2679 2.73223C16.5356 2 15.3571 2 13.0001 2H11.0001C8.64306 2 7.46455 2 6.73232 2.73223C6.09969 3.36486 6.01179 4.3306 6.00009 6.10169C5.99824 6.38054 6.00009 6.67937 6.00009 7V9.06325C6.00009 9.52389 6.00009 9.75421 6.0945 9.95578C6.18891 10.1574 6.36584 10.3048 6.71972 10.5997ZM9.25 6C9.25 5.58579 9.58579 5.25 10 5.25H14C14.4142 5.25 14.75 5.58579 14.75 6C14.75 6.41421 14.4142 6.75 14 6.75H10C9.58579 6.75 9.25 6.41421 9.25 6ZM10.25 9C10.25 8.58579 10.5858 8.25 11 8.25H13C13.4142 8.25 13.75 8.58579 13.75 9C13.75 9.41421 13.4142 9.75 13 9.75H11C10.5858 9.75 10.25 9.41421 10.25 9Z" />
    </G>
  </Svg>
)

const Icons = {
  contact: Contact,
  personal: Personal,
  highlights: Highlights,
  objective: Objective,
  summary: Summary,
  experience: Experience,
  volunteer: Volunteer,
  education: Education,
  skills: Skills,
  certificates: Certificates,
  projects: Projects,
  publications: Publications,
  languages: Languages,
  references: References,
  drag: Drag,
  settings: Settings,
  back: Back,
  profile: Profile,
  profileOutline: ProfileOutline,
  templates: Templates,
  templatesOutline: TemplatesOutline,
  cog: Cog,
  resume: Resume,
  letter: Letter,
}