import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {},
  viewTodoList: {
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#aaa'
  },
  viewBtnFilter: {
    flexDirection: 'row',
    backgroundColor: '#999',
    borderRadius: 8,
  },
  viewBtnUndoRedo: {
    flexDirection: 'row',
    backgroundColor: 'green',
    borderRadius: 8,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
  },
})