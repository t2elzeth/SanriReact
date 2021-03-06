import React from "react";

import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import ApexRadial from "./ApexRadial";

function MonthlyEarning() {
  // const { statistic } = useEffect(state => state.statistic)

  return (
    <React.Fragment>
      {" "}
      <Card>
        <CardBody>
          <CardTitle className="mb-4 h4">Прибыль</CardTitle>
          <Row>
            <Col sm="6">
              <p className="text-muted">За весь период</p>
              <h3>$34,252</h3>
              <p className="text-muted">
                <span className="text-success me-2">
                  12% <i className="mdi mdi-arrow-up" />
                </span>
                From previous period
              </p>
              <div className="mt-4">
                <Link
                  to=""
                  className="btn btn-primary btn-sm"
                >
                  View More <i className="mdi mdi-arrow-right ms-1" />
                </Link>
              </div>
            </Col>
            <Col sm="6">
              <div className="mt-sm-0">
                <ApexRadial />
              </div>
            </Col>
          </Row>
          <p className="text-muted mb-0">
            We craft digital, graphic and dimensional thinking.
          </p>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default MonthlyEarning;
