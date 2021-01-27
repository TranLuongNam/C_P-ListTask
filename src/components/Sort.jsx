import React, { Component } from "react";

class Sort extends Component {
  onClick = (by, value) => {
    // console.log(sortValue, sortBy);
    this.props.onSort(by, value);
  };
  render() {
    const { sort } = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.onClick("name", 1)}>
              <a
                role="button"
                // className={
                //   sort.by === "name" && sort.value === 1 ? "<i class=fas fa-check-square></i>" : ""
                // }
              >
                <span className="fa fa-sort-alpha-asc pr-5">
                  Tên A-Z
                  <i
                    className={
                      sort.by === "name" && sort.value === 1
                        ? "fas fa-check float-right"
                        : ""
                    }
                  />
                </span>
              </a>
            </li>
            <li onClick={() => this.onClick("name", -1)}>
              <a role="button">
                <span className="fa fa-sort-alpha-desc pr-5">
                  Tên Z-A
                  <i
                    className={
                      sort.by === "name" && sort.value === -1
                        ? "fas fa-check float-right"
                        : ""
                    }
                  />
                </span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li onClick={() => this.onClick("status", 1)}>
              <a role="button">
                Trạng Thái Kích Hoạt
                <i
                  className={
                    sort.by === "status" && sort.value === 1
                      ? "fas fa-check float-right"
                      : ""
                  }
                />
              </a>
            </li>
            <li onClick={() => this.onClick("status", -1)}>
              <a role="button">
                Trạng Thái Ẩn
                <i
                  className={
                    sort.by === "status" && sort.value === -1
                      ? "fas fa-check float-right"
                      : ""
                  }
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
