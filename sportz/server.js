// server.js
import 'dotenv/config';
import app from './src/app.js';
const PORT = process.env.PORT || 3000;

(async () => {
    try {
        console.log('🔄 Initializing primary service subsystem handshake matrices...');
       
        app.listen(PORT, () => {
            console.log(`=================================================`);
            console.log(`🚀 SERVICE ONLINE IN DEV MODE`);
            console.log(`📡 Local Engine Endpoint Address: http://localhost:${PORT}`);
            console.log(`=================================================`);
        });

        // Safe cleanup handling hooks in case unexpected terminating signals fire
        process.on('SIGTERM', () => {
            console.log('🛑 SIGTERM operational warning received. Securing background sockets...');
            app.close(() => {
                console.log('🔒 HTTP interface layer safely terminated.');
                process.exit(0);
            });
        });

    } catch (bootError) {
        console.error('💥 Fatal boot phase exception forced an immediate initialization termination:');
        console.error(bootError);
        process.exit(1);
    }
})();