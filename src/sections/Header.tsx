import React from 'react';

const Header: React.FC = () => {
    // 保留行內樣式作為備份
    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        padding: '0 3rem',
        backgroundColor: '#0a192f',
        color: '#ccd6f6'
    };

    const h1Style = {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#e6f1ff'
    };

    const h2Style = {
        fontSize: '2.5rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
        color: '#8892b0'
    };

    const pStyle = {
        fontSize: '1.2rem',
        maxWidth: '42rem',
        color: '#8892b0'
    };

    return (
        <div className="relative">
        
            <div 
                className="min-h-screen flex flex-col justify-center px-12 md:px-24 lg:px-32 bg-[#0a192f] text-[#ccd6f6]" 
                style={containerStyle}
            >
                <h1 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#e6f1ff]" 
                    style={h1Style}
                >
                    Brittany Chiang
                </h1>
                <h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#8892b0]" 
                    style={h2Style}
                >
                    Front End Engineer
                </h2>
                <p 
                    className="text-lg md:text-xl max-w-2xl text-[#8892b0]" 
                    style={pStyle}
                >
                    I build accessible, pixel-perfect digital experiences for the web.
                </p>
            </div>
        </div>
    );
};

export default Header;