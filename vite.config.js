import { resolve }  from 'path';
import react from '@vitejs/plugin-react';

module.exports = {
 plugins: [
  react({
    include: '**/*.disabled',
  }),
 ],
 root: resolve('./src'),
 base: '/static/',
 server: {
   host: '127.0.0.1',
   port: 3000,
   open: false,
   watch: {
     usePolling: true,
     disableGlobbing: false,
   },
 },
 resolve: {
   extensions: ['.js', '.json'],
 },
 build: {
   outDir: resolve('./src/dist'),
   assetsDir: '',
   manifest: true,
   emptyOutDir: true,
   target: 'es2015',
   rollupOptions: {
     input: {
       main: resolve('./src/main.jsx'),
     },
     output: {
       chunkFileNames: undefined,
     },
   },
 },
};