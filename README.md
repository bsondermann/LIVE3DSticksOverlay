# LIVE3DSticksOverlay
This is a Tool to display your Stick movements in your Livestream.

To run it, you need to have Python 3 installed on your Computer as it uses the simple HTTP Server from Python.

To imbed the Overlay into OBS you need to add a Browser Element to your Scene and use http://127.0.0.1:8000 as the URL.

To start the Server, you simply double click on the start.bat File. The Server stops either if you hit CTRL+C twice in the Command Prompt or you simply Exit the Command Prompt.

The First time you run the Server and you connect your Radio nothing will be displayed because your Browser doesn't know which Gamecontroller to use. So you need to open the Console (F12) and find out which Index is the correct Gamecontroller and then replace the -1 in the config.xml File with the correct Index. If you then reload the page, the Sticks should show up.
