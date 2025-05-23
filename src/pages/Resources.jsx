import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function Resources() {
  const [wpArticles, setWpArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://t1e.afa.myftpupload.com/wp-json/wp/v2/posts?categories=6&_embed');
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        setWpArticles(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching WordPress articles:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const resourceSections = [
    {
      title: "How to Legally Operate a Medspa in California Without a Medical License",
      path: "/resources/california-medspa-medical-director-guide",
      description: "Comprehensive guide to legally operating a medspa in California as a non-medical professional. Learn about regulations, medical director requirements, and business structures.",
      imageUrl: "https://images.pexels.com/photos/4586741/pexels-photo-4586741.jpeg"
    },
    {
      title: "Find a Medical Director for Your Aesthetic Clinic in Nevada Without the Headaches",
      path: "/resources/nevada-medspa-medical-director-guide",
      description: "Comprehensive guide to finding and working with qualified medical directors for Nevada medspas.",
      imageUrl: "https://images.pexels.com/photos/4586741/pexels-photo-4586741.jpeg"
    },
    {
      title: "Starting a Medspa in Texas? Here's How to Partner With the Right Medical Director",
      path: "/resources/texas-medspa-medical-director-guide",
      description: "Comprehensive guide to finding and working with qualified medical directors for Texas medspas.",
      imageUrl: "https://images.pexels.com/photos/4586741/pexels-photo-4586741.jpeg"
    },
    {
      title: "How to Find a Medical Director for Your Medspa in Florida: A Complete 2025 Guide",
      path: "/resources/florida-medspa-medical-director-guide",
      description: "Comprehensive guide to finding and working with qualified medical directors for Florida medspas in 2025.",
      imageUrl: "https://images.pexels.com/photos/4586741/pexels-photo-4586741.jpeg"
    },
    { 
      title: "How to Become a Medical Director", 
      path: "/resources/becoming-medical-director",
      description: "Comprehensive guide to starting your career as a medical director in the aesthetic industry.",
      imageUrl: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      title: "Understanding Medical Director Responsibilities: What You Need to Know", 
      path: "/resources/medical-director-role",
      description: "Explore the critical responsibilities and strategic importance of medical directors in modern healthcare settings.",
      imageUrl: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0b55bcbf30be31fb47004.jpeg"
    },
    { 
      title: "The Future of Medical Directorship", 
      path: "/resources/future-medical-director",
      description: "Insights into emerging trends, technological advancements, and evolving roles in medical leadership.",
      imageUrl: "https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      title: "Challenges Faced in Medical Direction", 
      path: "/resources/medical-direction-challenges",
      description: "Addressing complex issues in medical leadership, compliance, and organizational management.",
      imageUrl: "https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      title: "Why Medical Directors Are Vital", 
      path: "/resources/why-medical-directors-vital",
      description: "Understanding the pivotal role medical directors play in ensuring quality care and operational excellence.",
      imageUrl: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      title: "Key Responsibilities of a Medical Director", 
      path: "/resources/medical-director-responsibilities",
      description: "Detailed overview of core duties, strategic planning, and leadership expectations for medical directors.",
      imageUrl: "https://images.pexels.com/photos/5327659/pexels-photo-5327659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div>
      <PageHero 
        title="Resources for Medical Directors"
        backgroundImage="https://images.pexels.com/photos/5452220/pexels-photo-5452220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive insights, guidance, and professional development resources for medical directors navigating the complex healthcare landscape. Our resources include both curated content and the latest articles from our blog.
          </p>
          
          {/* Static Resource Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            {resourceSections.map((section, index) => (
              <Link 
                key={index} 
                to={section.path} 
                className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={section.imageUrl} 
                    alt={section.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-primary-dark mb-4">{section.title}</h2>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="text-secondary font-medium">Learn More →</div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* WordPress Articles Section */}
          {wpArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">Latest Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {wpArticles.map((article) => (
                  <Link 
                    key={article.id} 
                    to={`/article/${article.id}`}
                    className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {article.featured_media ? (
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={article._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg'}
                          alt={article.title.rendered} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-64 overflow-hidden">
                        <img 
                          src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg"
                          alt="Default article image" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 
                        className="text-xl font-semibold text-primary-dark mb-4"
                        dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                      />
                      <div 
                        className="text-gray-600 mb-4 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}
                      />
                      <div className="text-secondary font-medium">Read More →</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Loading State */}
          {isLoading && (
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-600">Loading latest articles...</p>
            </div>
          )}
          
          {/* Error State */}
          {error && (
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-600">Unable to load latest articles. Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
