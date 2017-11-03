import { AppRegistry, Text } from 'react-native';

import ScheduleViewer from '../screens/ScheduleViewer';

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => ScheduleViewer);
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('react-root') });
