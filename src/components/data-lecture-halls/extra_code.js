class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.refmarker = React.createRef();
        this.state = {
            lat: 34.069156,
            lng: -118.44418,
            zoom: 15,
            marker: {
                lat: 34.069156,
                lng: -118.44418
            },
            currentQuestion: 0,
            correctAnswers: new Array(10).fill(false),
            attemptsMade: new Array(10).fill(false),
        };
    }

    render() {
        const transparentColor = "rgb(0,0,0,0)";
        const position = [this.state.lat, this.state.lng];
        return (
            <div className="trivia-container">
                <h1 className = "header">Quiz: UCLA’s Top 10 Largest Lecture Halls</h1>
                <h1 className="trivia-text">
                        Drag and drop the lecture halls below into the correct order by size. 
                        The largest should be at the top. When you have placed all the lecture halls, 
                        a map with the locations of the buildings for the top 10 largest ones will 
                        be displayed. 
                        </h1>
                <ul id="lectureHalls">
                    <li>La Kretz Hall 100</li>
	                <li>Franz Hall 1178</li>
	                <li>Haines Hall 39</li>
	                <li>Young Hall CS50</li>
	                <li>Rolfe Hall 1200</li>
	                <li>Moore Hall 100</li>
	                <li>Fowler Museum A103B</li>
	                <li>Kaplan Hall A51</li>	     
	                <li>Broad Art Center 2160E</li>
	                <li>Dodd Hall 147</li>
                </ul>
                <button onclick="checkAnswer()">Check your answers!</button>
                <script src = "quiz.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
                
                <div className="sidebar">
                    {/* <SideBar
                        currentQuestion={this.state.currentQuestion}
                        handleCloseCallback={this.handleCloseCallback}
                        questionChangeCallback={this.questionChangeCallback}
                        attemptsMade={this.state.attemptsMade}
                        correctAnswers={this.state.correctAnswers}
                    /> */}
                </div>
                <div className="map-container">
                    <div className="map-border">
                    <mapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</mapContainer>
                        {/* <Map
                            center={position}
                            zoom={this.state.zoom}
                            minZoom={15}
                            maxBounds={[[34.07925, -118.45774], [34.058, -118.4362]]}
                            onClick={() => {
                                this.handleMapClick();
                            }}
                        >
                            <TileLayer
                                attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery © <a href="http://mapbox.com">Mapbox</a>'
                                url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"
                            />
                            {config.locations.map((loc, index) => {
                                return (<Marker
                                    key={loc.name}
                                    position={[loc.lat, loc.long]}
                                    // icon={starIcon}
                                    // opacity={this.state.correctAnswers[index] ? 1 : 0}
                                    interactive={false}
                                />);
                            })} */}
                            {/* {config.locations.map((loc, index) => (
                                <Polygon
                                    key={loc.name}
                                    color={transparentColor}
                                    positions={loc.coordinates}
                                    onClick={() => {
                                        this.handleLandmarkClick(index);
                                    }}
                                />
                            ))} */}
                            {/* <ImageOverlay
                                url={mapImg}
                                bounds={[[34.0791, -118.45655], [34.0569, -118.43669]]}
                            /> */}
                        {/* </Map> */}
                    </div>
                </div>
                <div className='main_by_line'>
                    {(window.innerWidth > 800)
                        ? <p className='byLineText'>
                            Graphic by Maria Tassone, Daily Bruin staff,
                            Interactive by Laurel Woods, Graphics Interactives editor and
                            Lindey Parungo, assistant Graphics Interactives editor
                        </p>
                        : <p className='byLineText'>{`Graphic by Maria Tassone, Daily Bruin staff,\nInteractive by Laurel Woods, Graphics Interactives editor and\n Lindsey Parungo, assistant Graphics Interactives editor`}</p>}
                </div>
                
            </div>

        );
    }
};