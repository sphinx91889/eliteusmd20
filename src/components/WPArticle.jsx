import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WhyChooseUsSection from './WhyChooseUsSection';
import FAQSection from './FAQSection';
import FeaturedClinicSection from './FeaturedClinicSection';
import CTASection from './CTASection';

const WPArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://t1e.afa.myftpupload.com/wp-json/wp/v2/posts/${id}?_embed`);

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        setArticle(data);
        setIsLoading(false);
        
        // Set page title
        document.title = data.title.rendered + ' | EliteUSMD';
        
        // Scroll to top
        window.scrollTo(0, 0);
      } catch (err) {
        console.error('Error fetching WordPress article:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-xl text-gray-600">Loading article...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-xl text-gray-600">Error: {error}</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-xl text-gray-600">Article not found.</div>
      </div>
    );
  }

  // Format the date
  const publishDate = new Date(article.date);
  const formattedDate = publishDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 
            className="text-4xl font-bold mb-4 text-primary-dark"
            dangerouslySetInnerHTML={{ __html: article.title.rendered }}
          />
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>Published {formattedDate}</span>
            <span>•</span>
            <span>Written by EliteUSMD Team</span>
          </div>
        </div>

        {article._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <div className="mb-8">
            <img
              src={article._embedded['wp:featuredmedia'][0].source_url}
              alt={article.title.rendered}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}

        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content.rendered }}
        />
      </div>

      <WhyChooseUsSection />
      <FAQSection />
      <FeaturedClinicSection />
      <CTASection />
    </div>
  );
};

export default WPArticle;