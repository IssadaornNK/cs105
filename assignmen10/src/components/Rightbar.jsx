import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function Rightbar() {
    return (
        <Box sx={{  flexDirection:'column'}}>
            <Typography variant="h5"> Latest  Photos </Typography>
            <ImageList sx={{ width: 250}} cols={2} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}
const itemData = [
    {img:'https://img.freepik.com/free-photo/isolated-closeup-shot-beautiful-pink-evergreen-rose-black-background_181624-31003.jpg?w=1380&t=st=1679921298~exp=1679921898~hmac=b26b405ae4cd1ffde10517ac0f6a9541bdaea51b03477218b02d16d2e4794d0a',
     title: 'Flower1',
    },
    {
        img:'https://img.freepik.com/free-photo/bunch-fresh-flower-twigs-with-ribbon_23-2148104399.jpg?w=1380&t=st=1679921539~exp=1679922139~hmac=e4b30cd19bc695b097af6cfecaf49479202a9a261538e3b29fd460bc8677edf2',
        title: 'Flower2',
    },
    {
        img:'https://img.freepik.com/free-photo/flat-lay-white-alstroemerias-with-copy-space_23-2148615308.jpg?w=1380&t=st=1679921622~exp=1679922222~hmac=c9f1d830046334e3634f4caac09479fd9d68da61438f7f1cae18aae43ad90378',
        title:'Flower3',
    },
    {
        img:'https://img.freepik.com/free-vector/watercolor-chrysanthemum-seamless-pattern_21799-6700.jpg?w=1380&t=st=1679921748~exp=1679922348~hmac=ad9dce9451d505518e4f652115d661d268ad67802bfb24351ab64febf93c1fa1',
        title:'Flower4',
    },
];

export default Rightbar