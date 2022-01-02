import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle} from 'reactstrap';

function RenderStaffs({staff}) {

    return(
        <Card key={staff.id}>
            <CardImg src={staff.image} alt={staff.name} />
            <CardBody>
            <CardTitle>{staff.name}</CardTitle>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">           
                    <RenderStaffs staff={props.staffs} />
                </div>
            </div>
        </div>
    );
}

export default Home;   