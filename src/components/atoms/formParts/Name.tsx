import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateFormSelf from "_lib/updateFormSelf";

import { InterfaceFormProps } from "../types/InterfaceFormProps";

const userSelector = (state) => state.account.user;

const Name = (props: InterfaceFormProps) => {
  const { validate, error } = props;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <dl className="require">
      <dt>お名前</dt>
      <dd>
        <>
          {props.status === 0 && (
            <div className="form_horizontal">
              <span>
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="山田"
                  defaultValue={user.last_name}
                  //   value={user.last_name}
                  onChange={(e) => updateFormSelf(e, dispatch)}
                  onBlur={(e) => validate(e)}
                />
              </span>
              <span className="msg">{error.last_name}</span>
            </div>
          )}
          {props.status === 1 && (
            <div className="form_horizontal">
              <span>{user.last_name}</span>
            </div>
          )}
        </>

        <>
          {props.status === 0 && (
            <div className="form_horizontal">
              <span>
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="京子"
                  defaultValue={user.first_name}
                  //   value={user.first_name}
                  onChange={(e) => updateFormSelf(e, dispatch)}
                  onBlur={(e) => validate(e)}
                />
              </span>
              <span className="msg">{error.first_name}</span>
            </div>
          )}
          {props.status === 1 && (
            <div className="form_horizontal">
              <span>{user.first_name}</span>
            </div>
          )}
        </>
      </dd>
    </dl>
  );
};
export default Name;
