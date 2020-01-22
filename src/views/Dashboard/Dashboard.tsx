import React, { PureComponent } from "react";
import { Button } from "antd";

class Dashboard extends PureComponent {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2 className="page-title">Dashboard</h2>
        <Button type="primary">Antd</Button>
      </div>
    );
  }
}

export default Dashboard;
