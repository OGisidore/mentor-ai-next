"use client"

import { faTimes, faLightbulb, faGraduationCap, faMicrophone, faChevronRight, faBook, faComments, faStar, faFire, faCheckDouble } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Pannel = ({showSuggestions, setShowSuggestions}:{showSuggestions : boolean, setShowSuggestions : ()=> void}) => {
    return (
        <div
            id="suggestionsPanel"
            className={ (showSuggestions ? " translate-x-0 " : " translate-x-full ") + "fixed lg:absolute top-0 right-0 h-[calc(100vh-64px)] w-full lg:w-96 transform transition-transform duration-300 ease-in-out bg-white overflow-y-auto shadow-lg border-l border-gray-200"}
        >
            <button
                onClick={setShowSuggestions}

                // onClick="toggleSuggestions()"
                className="absolute top-4 right-4 p-2 rounded-lg text-gray-500 hover:bg-gray-100 lg:hidden"
            >
                <FontAwesomeIcon icon={faTimes} />
                <i className="fas fa-times"></i>
            </button>

            <div className="suggestions-button-wrapper absolute left-0 top-4 transform -translate-x-full hidden lg:block">
                <button
                    onClick={setShowSuggestions}
                    // onClick="toggleSuggestions()"
                    className="flex items-center gap-2 px-3 py-2 bg-white rounded-l-lg border border-r-0 border-gray-200 shadow-sm hover:bg-gray-50"
                >
                    <FontAwesomeIcon icon={faLightbulb} className=" text-gray-600" />
                    {/* <i className="fas fa-lightbulb text-gray-600"></i> */}
                    <span className="text-sm text-gray-600">Suggestions</span>
                </button>
            </div>

            <div className="p-4 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-4 sticky top-0 bg-white pb-2 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Suggestions for Language Learning
                    </h2>
                </div>

                <div className="space-y-6 p-4">
                    {/* <!-- Progress Overview --> */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-medium text-gray-800">Your Learning Progress</h3>
                            <span className="text-xs text-blue-600 font-medium">This Week</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-2">
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                <div className="text-2xl font-semibold text-blue-600 mb-1">12</div>
                                <div className="text-xs text-gray-600">Lessons Completed</div>
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                <div className="text-2xl font-semibold text-green-600 mb-1">85%</div>
                                <div className="text-xs text-gray-600">Accuracy Rate</div>
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                <div className="text-2xl font-semibold text-purple-600 mb-1">45m</div>
                                <div className="text-xs text-gray-600">Practice Time</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-gray-800 mb-3">Active Learning Path</h3>
                        <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faGraduationCap} className="text-green-600" />
                                    {/* <i className="fas fa-graduation-cap text-green-600"></i> */}
                                </div>
                                <div>
                                    <div className="font-medium text-gray-800">French for Travel</div>
                                    <div className="text-xs text-gray-500">Intermediate Level</div>
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                <div className="bg-green-500 h-2 rounded-full w-[60%]"></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>Progress: 60%</span>
                                <span>20/30 Lessons</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-gray-800 mb-3">Today&apos;s Practice Activities</h3>
                        <div className="space-y-2">
                            <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faMicrophone} className="text-blue-600" />
                                    {/* <i className="fas fa-microphone text-blue-600"></i> */}
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-800">Pronunciation Practice</div>
                                    <div className="text-xs text-gray-500">10 common phrases</div>
                                </div>
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                                {/* <i className="fas fa-chevron-right text-gray-400"></i> */}
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faBook} className="text-purple-600" />
                                    {/* <i className="fas fa-book text-purple-600"></i> */}
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-800">Vocabulary Review</div>
                                    <div className="text-xs text-gray-500">Travel essentials</div>
                                </div>
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                                {/* <i className="fas fa-chevron-right text-gray-400"></i> */}
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faComments} className="text-green-600" />
                                    {/* <i className="fas fa-comments text-green-600"></i> */}
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-800">Conversation Practice</div>
                                    <div className="text-xs text-gray-500">Restaurant scenarios</div>
                                </div>
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                                {/* <i className="fas fa-chevron-right text-gray-400"></i> */}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-gray-800 mb-3">Recent Achievements</h3>
                        <div className="flex gap-3 overflow-x-auto pb-2">
                            <div className="flex-shrink-0 w-16 text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-1">
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-600" />
                                    {/* <i className="fas fa-star text-yellow-600"></i> */}
                                </div>
                                <div className="text-xs text-gray-600">Perfect Score</div>
                            </div>
                            <div className="flex-shrink-0 w-16 text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-1">
                                    <FontAwesomeIcon icon={faFire} className="text-blue-600" />
                                    {/* <i className="fas fa-fire text-blue-600"></i> */}
                                </div>
                                <div className="text-xs text-gray-600">5 Day Streak</div>
                            </div>
                            <div className="flex-shrink-0 w-16 text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-1">
                                    <FontAwesomeIcon icon={faCheckDouble} className="text-green-600" />
                                    {/* <i className="fas fa-check-double text-green-600"></i> */}
                                </div>
                                <div className="text-xs text-gray-600">Quick Learner</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}