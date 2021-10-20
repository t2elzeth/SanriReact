import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import PropTypes from "prop-types";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";

import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, { PaginationListStandalone, PaginationProvider } from "react-bootstrap-table2-paginator";

import Breadcrumbs from "components/Common/Breadcrumb";
import classNames from "classnames";
import columns from "pages/Base/columns";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "@/store/orders";

const Base = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.orders);

  const [isFilteredOnlyShipped, setFilteredOnlyShipped] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [sizePerPage, setSizePerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  useEffect(() => {
    setFilteredOrders(isFilteredOnlyShipped ? orders.filter(order => order.is_shipped) : orders);
  }, [isFilteredOnlyShipped]);

  const pageOptions = {
    sizePerPage,
    totalSize: orders.length,
    custom: true
  };

  const CustomToggleList = ({ onColumnToggle }) => {
    const [expand, setExpand] = useState(true);

    function toggleColumns() {
      onColumnToggle("price10");
      onColumnToggle("auctionFees");
      onColumnToggle("recycle");
      setExpand(!expand);
    }

    const classes = classNames({
      mdi: true,
      "me-1": true,
      "mdi-minus": expand,
      "mdi-arrow-expand": !expand
    });

    return (
      <Button
        type="button"
        color="info"
        className="btn-rounded mb-2 me-2"
        onClick={toggleColumns}
      >
        <i className={classes} />
        {expand ? "Hide" : "Expand"}
      </Button>
    );
  };

  function handleChangeSizePerPage(e) {
    setSizePerPage(Number(e.target.value));
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Base</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Base" breadcrumbItem="Orders" />
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={filteredOrders}
                        columns={columns}
                        bootstrap4
                        search
                        columnToggle
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <Col sm="4">
                                <Button
                                  type="button"
                                  color="success"
                                  className="btn-rounded"
                                >
                                  <i className="bx bx-search-alt search-icon" />
                                  Search
                                </Button>
                              </Col>
                              <Col sm="8">
                                <div className="text-sm-end">
                                  <CustomToggleList {...toolkitProps.columnToggleProps} />
                                  <Button
                                    type="button"
                                    color="success"
                                    className="btn-rounded  mb-2 me-2"
                                    onClick={() => setFilteredOnlyShipped(!isFilteredOnlyShipped)}
                                  >
                                    {
                                      isFilteredOnlyShipped
                                        ?
                                        <>
                                          <i className="mdi mdi-anchor me-1" />
                                          <i className="mdi mdi-magnify-close me-1" />
                                        </>
                                        :
                                        <>
                                          <i className="mdi mdi-anchor me-1" />
                                          <i className="mdi mdi-magnify me-1" />
                                        </>
                                    }
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    bordered={false}
                                    striped={false}
                                    classes={"table align-middle table-nowrap text-center"}
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row className="align-items-md-center mt-30">
                              <Col className="justify-content-start">
                                <Form>
                                  <FormGroup row>
                                    <Col md={3}>
                                      <select className="form-control" onInput={handleChangeSizePerPage}>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                      </select>
                                    </Col>
                                  </FormGroup>

                                </Form>
                              </Col>
                              <Col
                                className="pagination pagination-rounded justify-content-end mb-2 inner-custom-pagination">
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </Col>
                            </Row>
                          </React.Fragment>
                        )}
                      </ToolkitProvider>
                    )}
                  </PaginationProvider>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Base.propTypes = {
  car_orders: PropTypes.array,
  onGetCustomers: PropTypes.func,
  onAddNewCustomer: PropTypes.func,
  onDeleteCustomer: PropTypes.func,
  onUpdateCustomer: PropTypes.func
};

export default Base;
