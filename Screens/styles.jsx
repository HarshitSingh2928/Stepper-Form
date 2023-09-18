import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    width: 'fit-content',
    // height: 'fit-content',
    minHeight:450,
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 30,

    paddingLeft: 20,
    paddingRight: 20,
    margin: 20,
    backgroundColor: '#fff',
  },
  box: {},
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10, 
  },
  subHeading: {
    fontSize: 20,
    marginBottom: 25, 
  },
  label: {
    color: 'hsl(213, 96%, 18%)',
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 5, 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10, 
  },
  rectangleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rectangle: {
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    alignItems: 'flex-start',
  },
  radioContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#f0f6ff',
  },
  rectangleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:5
  },
  summary:{
    backgroundColor:'#f0f6ff',
    padding:10,
    borderRadius:5
  },
  plan:{
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    padding:5,
  },
  planText:{
    fontWeight:'bold',
    color:'hsl(213, 96%, 18%)',
    fontSize:16
  },
  addonView:{
    padding:5,
  }
});

export default styles;
