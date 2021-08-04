import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class DetailContainer extends React.Component {
  state = {
    restuls: null,
    error: null,
    loading: true,
  };
  render() {
    const { restuls, error, loading } = this.state;
    return (
      <DetailPresenter restuls={restuls} error={error} loading={loading} />
    );
  }
}
