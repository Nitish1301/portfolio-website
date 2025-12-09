import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import SearchMeals from './components/SearchMeals';
import MealSuggestions from './components/MealSuggestions';
import Recipes from './components/Recipes';
import WorkoutSuggestions from './components/WorkoutSuggestions';
import Progress from './components/Progress';
import Settings from './components/Settings';

function App() {
    const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
    const [userData, setUserData] = useState(null);
    const [currentTab, setCurrentTab] = useState('dashboard');

    const handleOnboardingComplete = (data) => {
        setUserData(data);
        setIsOnboardingComplete(true);
    };

    const handleLogout = () => {
        setIsOnboardingComplete(false);
        setUserData(null);
        setCurrentTab('dashboard');
    };

    const renderContent = () => {
        switch (currentTab) {
            case 'dashboard':
                return <Dashboard userData={userData} />;
            case 'search':
                return <SearchMeals />;
            case 'meals':
                return <MealSuggestions />;
            case 'recipes':
                return <Recipes />;
            case 'workout':
                return <WorkoutSuggestions />;
            case 'progress':
                return <Progress />;
            case 'settings':
                return <Settings onLogout={handleLogout} />;
            default:
                return <Dashboard userData={userData} />;
        }
    };

    return (
        <div className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-black">
            <AnimatePresence mode="wait">
                {!isOnboardingComplete ? (
                    <motion.div
                        key="onboarding"
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Onboarding onComplete={handleOnboardingComplete} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="app"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="min-h-screen flex flex-col"
                    >
                        <Navbar activeTab={currentTab} onTabChange={setCurrentTab} />

                        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {renderContent()}
                                </motion.div>
                            </AnimatePresence>
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
