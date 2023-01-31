# wedding-song-vote :bride_with_veil::ring::clinking_glasses:

Do you know what song is going to play as you walk down the aisle?<br>
Let guests at your wedding vote for the song! The wedding DJ will have access to voting results and will play the winning song.

#### Try it here: https://song-vote-react.vercel.app/

#### This app includes:

- Introduction page, with concise explanation of the voting process.
- Form page, for the actual voting.
- Thanks page, generates after voting is completed.
- Results page (in previous versions of this app, this page was inaccessible to regular users. This functionality can be added again if needed).

## Special features

#### One vote per person:

After casting a vote, localStorage is saved to ensure every person votes only once. Yes, technically users can remove browser data and vote again, but this action seems implausible in an actual event setting.

#### Connection to a database:

For real-life use, votes will be gathered and pulled from an actual DB. This version has no DB connection currently.

## Mobile-first approach

This web app is best used on a smartphone, but is fully responsive and can be viewed in other devices as well.

## Built with specific occasion in mind

This app was developed to be used in a real-life event such as a wedding, therefore designed with simplicity and usability in mind. Younger users will have an inherit understanding of the voting process without much attention, and older users will be directed by clear and precise instructions.
