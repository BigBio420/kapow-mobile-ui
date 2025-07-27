import React from &#39;react&#39;;
import { View, Text, TouchableOpacity, StyleSheet } from &#39;react-native&#39;;
export default function App() {
return (
&lt;View style={styles.container}&gt;
&lt;Text style={styles.title}&gt;�� KAPOW THE WORLD&lt;/Text&gt;
&lt;TouchableOpacity style={styles.button}&gt;
&lt;Text style={styles.buttonText}&gt;Start Recording&lt;/Text&gt;
&lt;/TouchableOpacity&gt;
&lt;TouchableOpacity style={styles.button}&gt;
&lt;Text style={styles.buttonText}&gt;Add Audio FX&lt;/Text&gt;
&lt;/TouchableOpacity&gt;
&lt;TouchableOpacity style={styles.button}&gt;
&lt;Text style={={styles.buttonText}&gt;Add Comic FX&lt;/Text&gt;
&lt;/TouchableOpacity&gt;
&lt;TouchableOpacity style={styles.button}&gt;
&lt;Text style={styles.buttonText}&gt;Upload to Kapow Cloud&lt;/Text&gt;
&lt;/TouchableOpacity&gt;
&lt;TouchableOpacity style={styles.button}&gt;
&lt;Text style={styles.buttonText}&gt;Remix &amp; Rise Leaderboard&lt;/Text&gt;
&lt;/TouchableOpacity&gt;
&lt;/View&gt;
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: &#39;#111&#39;,
alignItems: &#39;center&#39;,
justifyContent: &#39;center&#39;,
padding: 20,
},
title: {
color: &#39;#FFD700&#39;,
fontSize: 28,
fontWeight: &#39;bold&#39;,
marginBottom: 40,

textAlign: &#39;center&#39;,
},
button: {
backgroundColor: &#39;#FF2D55&#39;,
paddingVertical: 12,
paddingHorizontal: 30,
borderRadius: 24,
marginVertical: 10,
width: &#39;100%&#39;,
},
buttonText: {
color: &#39;#fff&#39;,
fontSize: 18,
textAlign: &#39;center&#39;,
},
});
