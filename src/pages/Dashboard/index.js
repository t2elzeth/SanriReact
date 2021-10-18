import React from "react";
import MetaTags from 'react-meta-tags';
import {Card, CardBody, Col, Container, Row,} from "reactstrap";
import MonthlyEarning from "./MonthlyEarning";
import WalletActivities from "./walletActivities";

const reports = [
    { title: "Куплено машин", iconClass: "bx-copy-alt", description: 0 },
    { title: "Безналичные переводы", iconClass: "bx-copy-alt", description: 0 },
    { title: "Отправлено контейнеров", iconClass: "bx-copy-alt", description: 0 },
    { title: "Машин загружено на контейнеры", iconClass: "bx-copy-alt", description: 0 },
    { title: "Машин продано на аукционах", iconClass: "bx-copy-alt", description: 0 },
    { title: "Машин перепродано", iconClass: "bx-copy-alt", description: 0 },
    { title: "Машин на стоянках", iconClass: "bx-copy-alt", description: 0 },
    { title: "Сумма всех доходов", iconClass: "bx-copy-alt", description: 0 },
    { title: "Сумма всех расходов", iconClass: "bx-copy-alt", description: `0` },
  ];


function Dashboard() {
  return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Dashboard | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            <h4>Dashboard</h4>

            <Row>
            <Col xl="4">
              <MonthlyEarning />
            </Col>
            <Col xl="8">
              <Row>
                {/* Reports Render */}
                {reports.map((report, key) => (
                  <Col md="4" key={"_col_" + key}>
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                              {report.title}
                            </p>
                            <h4 className="mb-0">{report.description}</h4>
                          </div>
                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i
                                  className={
                                    "bx " + report.iconClass + " font-size-24"
                                  }
                                />
                              </span>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <WalletActivities />
            </Col>
          </Row>
          </Container>
        </div>
      </React.Fragment>
  );
}

export default Dashboard;
