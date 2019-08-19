import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../layouts/Box';
import Button from '../../forms/Button';
import ButtonData from '../../forms/ButtonData';
import Field from '../../forms/Field';
import WrapContext from './cultures.wrapper';
import {
  callCulturesGet,
  callCulturesPost,
  callCulturesDelete,
  callCulturesPut,
} from '../../../controllers/routes/cultures/cultures.controller';

import '../../../styles/routes/cultures.style.scss';


const header = (
  <tr key="cultures-header">
    <th>id</th>
    <th>code</th>
    <th>description</th>
  </tr>
);


class CulturesRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.state = {
      id: '',
      code: '',
      description: '',
    };

    this.onIdChange = this.onIdChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onGetCultures = this.onGetCultures.bind(this);
    this.onAddCulture = this.onAddCulture.bind(this);
    this.onRemoveCulture = this.onRemoveCulture.bind(this);
    this.onUpdateCulture = this.onUpdateCulture.bind(this);

    this.mapList = this.mapList.bind(this);
  }

  onIdChange(event) {
    const { value } = event.target;

    if (/^\d*$/.test(value)) {

      this.setState({ id: parseInt(value) });
    }
  }

  onChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  onGetCultures() {
    const { cultureContext, sessionContext } = this.props;
    const context = { cultureContext, sessionContext };

    callCulturesGet({ context });
  }

  onAddCulture() {
    const { cultureContext, sessionContext } = this.props;
    const context = { cultureContext, sessionContext };

    const { code, description } = this.state;

    callCulturesPost({
      data: { code, description },
      context
    });
  }

  onRemoveCulture(event) {
    const { data } = event;

    const { cultureContext, sessionContext } = this.props;
    const context = { cultureContext, sessionContext };

    callCulturesDelete({ data, context });
  }

  onUpdateCulture(event) {
    const { cultureContext, sessionContext } = this.props;
    const context = { cultureContext, sessionContext };

    const { id, code, description } = this.state;

    callCulturesPut({
      data: { id, code, description },
      context
    });
  }

  mapList(data) {
    const { id, code, description } = data;

    return (
      <tr key={`tool-${id}`}>
        <td>
          {id}
        </td>
        <td>
          {code}
        </td>
        <td>
          {description}
        </td>
        <td>
          <ButtonData className="cultures__button" onClick={this.onRemoveCulture} data={id}>
            X
          </ButtonData>
        </td>
      </tr>
    );
  }

	render() {
    const { cultureContext } = this.props;
    const [state] = cultureContext;
    console.log(state);
    const { data: list } = state;

    const {
      id, code, description
    } = this.state;

    const strID = isNaN(id) ? '' : id.toString();

    const Table = list.map(this.mapList);

    return (
      <section className="cultures">
        <h1 className="cultures__title">
          Cultures
        </h1>
        <Box className="cultures__container">
        <Box className="cultures__group">
          <Button className="cultures__button" onClick={this.onGetCultures}>
            Get cultures list
          </Button>
        </Box>
        {(list.length > 0 && Table.length > 0) && (
          <>
            <br/>
            <br/>
            <br/>
            <Box className="cultures__group">
              <h2 className="cultures__sub-title">
                List
              </h2>
              <table className="cultures__table">
                <thead>
                  {header}
                </thead>
                <tbody>
                  {Table}
                </tbody>
              </table>
            </Box>
          </>
        )}
        {list.length > 0 && (
          <Box className="cultures__group">
            <form className="cultures__form">
              <Field label="Culture id (only to update)" className="cultures__field">
                <input
                  className="input input__text cultures__text-input"
                  name="id"
                  id="id"
                  type="text"
                  value={strID}
                  onChange={this.onIdChange}
                />
              </Field>
              <Field label="Code" className="cultures__field">
                <input
                  className="input input__text cultures__text-input"
                  name="code"
                  id="code"
                  type="text"
                  value={code}
                  onChange={this.onChange}
                />
              </Field>
              <Field label="Description" className="cultures__field">
                <input
                  className="input input__text cultures__text-input"
                  name="description"
                  id="description"
                  type="text"
                  value={description}
                  onChange={this.onChange}
                />
              </Field>
              <Box className="cultures__field">
                <Button
                  className="cultures__button"
                  onClick={!strID ? this.onAddCulture : this.onUpdateCulture}
                  disabled={!code || !description}
                >
                  {!strID ? 'Add' : 'Update'}
                </Button>
              </Box>
            </form>
          </Box>
        )}
        </Box>
      </section>
    );
	}
}


CulturesRoute.propTypes = {
  cultureContext: PropTypes.array.isRequired,
  sessionContext: PropTypes.array.isRequired,
};

CulturesRoute.defaultProps = {
};


export default WrapContext(CulturesRoute);
