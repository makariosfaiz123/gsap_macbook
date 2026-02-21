import { create } from 'zustand';

const useMacBookStore = create((set)=>({
    color: '#2e2c2e',
    setColor: (color)=>set({color}),

    scale : 0.08,
    setScale: (scale)=>set({scale}),

    textrue : '/videos/feature-1.mp4',
    setTextrue: (textrue)=>set({textrue}),

    reset: ()=>set({color:'2e2c2e',scale : 0.08 , textrue : '/videos/feature-1.mp4'}),
}));

export default useMacBookStore ;