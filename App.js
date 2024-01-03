import React from 'react';
import MainStack from './src/navigation';
import Order from './src/screens/AppStack/Order';

const App = () => {
  return <MainStack />;
};

export default App;

// import {View, Text, FlatList} from 'react-native';
// import React from 'react';

// const App = () => {
//   const newData = [
//     {
//       image: './src/assets/backarrow.png',
//       name: 'Backarrow',
//     },
//     {
//       image: './src/assets/bluebarry1.png',
//       name: 'bluebarry',
//     },
//     {
//       image: './src/assets/cartoon_forest.jpg',
//       name: 'cartoon_forest',
//     },
//     {
//       image: './src/assets/backarrow.png',
//       name: 'Backarrow',
//     },
//     {
//       image: './src/assets/backarrow.png',
//       name: 'Backarrow',
//     },
//   ];
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <FlatList
//         data={newData}
//         renderItem={({item}) => (
//           <View
//             style={{
//               backgroundColor: 'red',
//               margin: 20,
//               height: 80,
//               width: '90%',
//             }}>
//             <Text>{item.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default App;
