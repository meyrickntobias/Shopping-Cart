import { Card, Button } from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
type StoreItemProps = {id: number, name: string, price: number, imgUrl: string};

export function StoreItem({id, name, price, imgUrl} : StoreItemProps) {

    let quantity = 1;
    return (
        <Card>
            <Card.Img variant="top" style={{ height: "220px", objectFit: "cover"}} src={imgUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {formatCurrency(price)}
                </Card.Text>
            </Card.Body>
            {quantity === 0 ? (
                <Button className="pb-2 pt-2" style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px", width: "100%"}} variant="primary">Add to cart</Button>
            ) : (
                <div className="d-flex align-items-center flex-column pb-2" style={{ gap: ".5rem" }}>
                    <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                        <Button>-</Button>
                        <div>
                            <span className="fs-3">{quantity}</span> in cart

                        </div>
                        <Button>+</Button>
                    </div>
                    <Button variant="danger">Remove</Button>
                </div>
            )}
        </ Card>
    )
}