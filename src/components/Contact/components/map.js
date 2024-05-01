import {Col} from "react-bootstrap";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";


function Map() {
    return(
        <Col xs={12} md={6}>
            <div id='map'>
                <MapContainer center={[50.0614300, 19.9365800]} zoom={12} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={[50.066689397237035, 19.92169776751558]}>
                        <Popup>
                            Tu mieszkam :)
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </Col>
    )
}

export default Map