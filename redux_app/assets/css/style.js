import {StyleSheet} from 'react-native';
import {textColor, currentColor} from '../../base';

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: currentColor,
    padding: 20,
  },

  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 18,
    flex: 1,
    paddingHorizontal: 10,
    color: textColor
  },

  formBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  button: {
    backgroundColor: currentColor,
    marginHorizontal: 5,
    padding: 15,
  },

  text_white: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "bold"
  },

  empty_todo: {
    color: textColor,
    fontSize: 22,
    textAlign: "center",
    padding: 10
  },

  todo_listBx: {
    padding: 10
  },

  todo_list: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation : 3
  },

  todo_text: {
    color: textColor,
    fontSize: 17
  },

  todo_button: {
    backgroundColor: currentColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 7
  }
});

export default style;
