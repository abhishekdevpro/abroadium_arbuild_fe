import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const SalaryRangeToggle = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [salaryRanges, setSalaryRanges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalaryRanges = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.sentryspot.co.uk/api/employeer/salary-range');
        const result = await response.json();
        if (result.status === "success" && result.data) {
          setSalaryRanges(result.data);
        } else {
          setError("Failed to fetch salary ranges.");
        }
      } catch (error) {
        setError("An error occurred while fetching salary ranges.");
      } finally {
        setLoading(false);
      }
    };

    fetchSalaryRanges();
  }, []);

  const selectedSalaryId = useMemo(() => {
    const id = searchParams.get("salary_id");
    return id ? Number(id) : null;
  }, [searchParams]);

  const salaryRangeHandler = useCallback((id) => {
    const currentParams = Object.fromEntries(searchParams);

    if (selectedSalaryId === id) {
      delete currentParams["salary_id"];
    } else {
      currentParams["salary_id"] = id;
    }

    setSearchParams(
      Object.keys(currentParams).length > 0 ? currentParams : {},
      { replace: true }
    );
  }, [searchParams, setSearchParams, selectedSalaryId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-gray-600">Loading salary ranges...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      <ul className="space-y-4">
        {salaryRanges.map((range) => (
          <li key={range.id} className="mb-4">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={selectedSalaryId === range.id}
                  onChange={() => salaryRangeHandler(range.id)}
                />
                <div className="w-12 h-6 bg-gray-200 rounded-full peer 
                              peer-checked:after:translate-x-full 
                              peer-checked:after:border-white 
                              after:content-[''] 
                              after:absolute 
                              after:top-0.5 
                              after:left-[2px] 
                              after:bg-white 
                              after:border-gray-300 
                              after:border 
                              after:rounded-full 
                              after:h-5 
                              after:w-5 
                              after:transition-all 
                              peer-checked:bg-blue-600">
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {range.name}
              </span>
            </label>
          </li>
        ))}
      </ul>
      {salaryRanges.length === 0 && !loading && !error && (
        <div className="text-sm text-gray-500 text-center py-2">
          No salary ranges available
        </div>
      )}
    </div>
  );
};

export default React.memo(SalaryRangeToggle);