import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Body from "./app/components/dialog/body";
import Header from "./app/components/dialog/header"
import AddNewLinkPage from "./app/pages/addNewPostPage";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Col, Row } from "reactstrap";


const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		width: '54%',
		height: '100%',
		overflow: 'hidden',
    marginLeft:"27%"
  }
}));

function App(props) {

  const classes = useStyles(props);
  return (
    
      <Router>
        <Container>
          <Row >
            <Header/>
            <Row  className={classes.root} >
              <Switch>
              <Route exact path="/" component={Body} />
              <Route path="/add" component={AddNewLinkPage} />
              </Switch>
            </Row>
          </Row>
        </Container>
      </Router>
    
  );
}

export default App;
