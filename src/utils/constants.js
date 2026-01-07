export const PROJECTS = [
    {
        id: 1,
        title: 'RAG-based QA Chatbot',
        description: 'Retrieval-Augmented Generation chatbot using LangChain, FAISS, and FLAN-T5. Features contextually aware document Q&A with semantic vector retrieval and sub-second inference latency.',
        image: 'https://placehold.co/600x400/3b82f6/ffffff?text=RAG+Chatbot',
        tags: ['Python', 'LangChain', 'FAISS', 'Flask', 'Streamlit'],
        link: '#'
    },
    {
        id: 2,
        title: 'EchoSigns',
        description: 'Real-time speech-to-sign language translation pipeline. Integrated NLP preprocessing, speech recognition, and gesture synthesis models to realize 90% accuracy in live testing.',
        image: 'https://placehold.co/600x400/1e293b/ffffff?text=EchoSigns',
        tags: ['Flask', 'HTML/CSS/JS', 'Speech Recognition', 'Django'],
        link: '#'
    },
    {
        id: 3,
        title: 'Deepfake Detection',
        description: 'Built and fine-tuned models using transfer learning with MobileNetV2 and ResNet to detect manipulated videos, achieving peak accuracy of 90% on benchmark datasets.',
        image: 'https://placehold.co/600x400/64748b/ffffff?text=Deepfake+Detection',
        tags: ['Python', 'TensorFlow', 'Keras', 'Transfer Learning'],
        link: '#'
    },
    {
        id: 4,
        title: 'Emotion Detector',
        description: 'CNN emotion recognition system to classify facial expressions with ~80% average accuracy. Includes a Tkinter-based GUI for real-time inference.',
        image: 'https://placehold.co/600x400/e2e8f0/334155?text=Emotion+Detector',
        tags: ['Python', 'TensorFlow', 'Keras', 'Tkinter'],
        link: '#'
    }
];

export const NAV_LINKS = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
];
